import { LocalStorageService } from './../../../shared/services/local_storage.service';
import { Injectable } from '@angular/core';
import { createEffect } from '@ngrx/effects';
import { Actions, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, of, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import {
    registerAction,
    registerFailureAction,
    registerSuccessAction,
} from 'src/app/auth/store/actions/register.action';
import { ICurrentUser } from 'src/app/shared/types/current_user.interface';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable()
export class RegisterEffect {
    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private localStorageService: LocalStorageService,
        private router: Router,
        private toastr: ToastrService
    ) {}

    register$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(registerAction),
            switchMap(({ request }) => {
                return this.authService.register(request).pipe(
                    map((currentUser: ICurrentUser) => {
                        this.localStorageService.set(
                            'accessToken',
                            currentUser.token
                        );
                        return registerSuccessAction({ currentUser });
                    })
                );
            }),
            catchError((errorResponse: HttpErrorResponse) => {
                return of(registerFailureAction());
            })
        );
    });

    redirectAfterSubmit$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(registerSuccessAction),
                tap(() => {
                    this.toastr.success('Регистрация прошла успешно!');
                    this.router.navigateByUrl('/');
                })
            ),
        { dispatch: false }
    );

    showErrorNotification$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(registerFailureAction),
                tap(() => {
                    this.toastr.error('Не удалось зарегистрироваться!');
                })
            ),
        { dispatch: false }
    );
}
