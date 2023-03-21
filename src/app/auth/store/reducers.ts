// import { Action, createReducer, on } from '@ngrx/store';

// import { registerAction } from 'src/app/shared/store/auth/actions/register.action';
// import {
//     loginAction,
//     loginFailureAction,
//     loginSuccessAction,
// } from 'src/app/shared/store/auth/actions/login.action';
// import {
//     logoutAction,
//     logoutFailureAction,
//     logoutSuccessAction,
// } from 'src/app/shared/store/auth/actions/logout.action';

// import { IAuthState } from 'src/app/shared/types/store/auth_state.interface';
// import {
//     contentCloseAction,
//     contentOpenAction,
// } from 'src/app/shared/store/common/actions/content.action';

// const initialState: IAuthState = {
//     isSubmitting: false,
//     isLoggedIn: false,
//     error: null,
//     openContent: false,
// };

// const authReducer = createReducer(
//     initialState,
//     on(
//         registerAction,
//         (state): IAuthState => ({
//             ...state,
//             isSubmitting: true,
//         })
//     ),
//     on(
//         loginAction,
//         (state): IAuthState => ({
//             ...state,
//             isSubmitting: true,
//         })
//     ),
//     on(
//         loginSuccessAction,
//         (state): IAuthState => ({
//             ...state,
//             isSubmitting: false,
//             isLoggedIn: true,
//             error: null,
//         })
//     ),
//     on(
//         loginFailureAction,
//         (state, action): IAuthState => ({
//             ...state,
//             isSubmitting: false,
//             error: action.error,
//         })
//     ),
//     on(
//         logoutAction,
//         (state): IAuthState => ({
//             ...state,
//             isSubmitting: true,
//         })
//     ),
//     on(
//         logoutSuccessAction,
//         (state): IAuthState => ({
//             ...state,
//             isSubmitting: false,
//             isLoggedIn: false,
//             error: null,
//         })
//     ),
//     on(
//         logoutFailureAction,
//         (state, action): IAuthState => ({
//             ...state,
//             isSubmitting: false,
//             error: action.error,
//         })
//     ),
//     on(
//         contentOpenAction,
//         (state): IAuthState => ({
//             ...state,
//             openContent: true,
//         })
//     ),
//     on(
//         contentCloseAction,
//         (state): IAuthState => ({
//             ...state,
//             openContent: false,
//         })
//     )
// );
// export function reducer(state: IAuthState, action: Action) {
//     return authReducer(state, action);
// }
