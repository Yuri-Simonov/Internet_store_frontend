// import { PersistanceService } from './../../../shared/services/persistance.service';
// import { CurrentUserInterface } from './../../../shared/types/current_user.interface';
// import { AuthService } from './../../services/auth.service';
// import {
//     registerAction,
//     registerFailureAction,
//     registerSuccessAction,
// } from './../actions/register.action';
// import { Injectable } from '@angular/core';
// import { createEffect } from '@ngrx/effects';
// import { Actions, ofType } from '@ngrx/effects';
// import { catchError, map, switchMap, of, tap } from 'rxjs';
// import { HttpErrorResponse } from '@angular/common/http';
// import { Router } from '@angular/router';

// @Injectable()
// export class RegisterEffect {
//     register$ = createEffect(() => {
//         return this.actions$.pipe(
//             ofType(registerAction),
//             switchMap(({ request }) => {
//                 return this.authService.register(request).pipe(
//                     map((currentUser: CurrentUserInterface) => {
//                         this.persistanceService.set(
//                             'accessToken',
//                             currentUser.token
//                         );
//                         return registerSuccessAction({ currentUser });
//                     })
//                 );
//             }),
//             catchError((errorResponse: HttpErrorResponse) => {
//                 return of(
//                     registerFailureAction({
//                         errors: errorResponse.error.errors,
//                     })
//                 );
//             })
//         );
//     });

//     redirectAfterSubmit$ = createEffect(
//         () =>
//             this.actions$.pipe(
//                 ofType(registerSuccessAction),
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
