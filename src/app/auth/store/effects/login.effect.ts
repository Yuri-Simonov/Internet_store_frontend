import { Injectable } from '@angular/core';
import { createEffect } from '@ngrx/effects';
import { Actions, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, of, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import {
    loginAction,
    loginFailureAction,
    loginSuccessAction,
} from 'src/app/auth/store/actions/login.action';
import { ICurrentUser } from 'src/app/shared/types/current_user.interface';
import { AuthService } from 'src/app/auth/services/auth.service';
import { LocalStorageService } from 'src/app/shared/services/local_storage.service';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class LoginEffect {
    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private localStorageService: LocalStorageService,
        private router: Router,
        private toastr: ToastrService
    ) {}

    login$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loginAction),
            tap(() => {
                console.log('here');
            }),
            switchMap(({ request }) => {
                return this.authService.login(request).pipe(
                    map((currentUser: ICurrentUser) => {
                        this.localStorageService.set(
                            'accessToken',
                            currentUser.token
                        );
                        return loginSuccessAction({ currentUser });
                    })
                );
            }),
            catchError((errorResponse: HttpErrorResponse) => {
                return of(loginFailureAction());
            })
        );
    });

    redirectAfterSubmit$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(loginSuccessAction),
                tap(() => {
                    this.toastr.success('Авторизация прошла успешно!');
                    this.router.navigateByUrl('/');
                })
            ),
        { dispatch: false }
    );

    showErrorNotification$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(loginFailureAction),
                tap(() => {
                    this.toastr.error('Не удалось авторизоваться!');
                })
            ),
        { dispatch: false }
    );
}
