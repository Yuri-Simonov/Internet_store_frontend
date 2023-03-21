// import {
//     getCurrentUserAction,
//     getCurrentUserFailureAction,
//     getCurrentUserSuccessAction,
// } from './../actions/get_current_user.action';
// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { catchError, map, of, switchMap, tap } from 'rxjs';
// import { CurrentUserInterface } from 'src/app/shared/types/current_user.interface';
// import { AuthService } from 'src/app/auth/services/auth.service';
// import { PersistanceService } from 'src/app/shared/services/persistance.service';

// @Injectable()
// export class GetCurrentUserEffect {
//     getCurrentUser$ = createEffect(() => {
//         return this.actions$.pipe(
//             ofType(getCurrentUserAction),
//             switchMap(() => {
//                 const token = this.persistanceService.get('accessToken');
//                 if (!token) {
//                     return of(getCurrentUserFailureAction());
//                 }
//                 return this.authService.getCurrentUser().pipe(
//                     map((currentUser: CurrentUserInterface) => {
//                         return getCurrentUserSuccessAction({ currentUser });
//                     })
//                 );
//             }),
//             catchError(() => {
//                 return of(getCurrentUserFailureAction());
//             })
//         );
//     });

//     constructor(
//         private actions$: Actions,
//         private authService: AuthService,
//         private persistanceService: PersistanceService
//     ) {}
// }
