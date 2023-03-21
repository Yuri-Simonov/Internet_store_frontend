// import { PersistanceService } from './../../../shared/services/persistance.service';
// import { CurrentUserInterface } from './../../../shared/types/current_user.interface';
// import { AuthService } from './../../services/auth.service';
// import { Injectable } from '@angular/core';
// import { createEffect } from '@ngrx/effects';
// import { Actions, ofType } from '@ngrx/effects';
// import { catchError, map, switchMap, of, tap } from 'rxjs';
// import { HttpErrorResponse } from '@angular/common/http';
// import { Router } from '@angular/router';
// import {
//     loginAction,
//     loginFailureAction,
//     loginSuccessAction,
// } from '../actions/login.action';

// @Injectable()
// export class LoginEffect {
//     login$ = createEffect(() => {
//         return this.actions$.pipe(
//             ofType(loginAction),
//             switchMap(({ request }) => {
//                 return this.authService.login(request).pipe(
//                     map((currentUser: CurrentUserInterface) => {
//                         this.persistanceService.set(
//                             'accessToken',
//                             currentUser.token
//                         );
//                         return loginSuccessAction({ currentUser });
//                     })
//                 );
//             }),
//             catchError((errorResponse: HttpErrorResponse) => {
//                 return of(
//                     loginFailureAction({
//                         errors: errorResponse.error.errors,
//                     })
//                 );
//             })
//         );
//     });

//     redirectAfterSubmit$ = createEffect(
//         () =>
//             this.actions$.pipe(
//                 ofType(loginSuccessAction),
//                 tap(() => {
//                     this.router.navigateByUrl('/');
//                 })
//             ),
//         { dispatch: false }
//     );

//     constructor(
//         private actions$: Actions,
//         private authService: AuthService,
//         private persistanceService: PersistanceService,
//         private router: Router
//     ) {}
// }
