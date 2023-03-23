import { Action, createReducer, on } from '@ngrx/store';

import {
    registerAction,
    registerFailureAction,
    registerSuccessAction,
} from 'src/app/auth/store/actions/register.action';

import { IAuthState } from 'src/app/auth/types/auth_state.interface';

const initialState: IAuthState = {
    isSubmitting: false,
    isLoading: false,
    currentUser: null,
    isLoggedIn: null,
    error: null,
};

const reducer = createReducer(
    initialState,
    on(
        registerAction,
        (state): IAuthState => ({
            ...state,
            isSubmitting: true,
        })
    ),
    on(
        registerSuccessAction,
        (state): IAuthState => ({
            ...state,
            isSubmitting: false,
        })
    ),
    on(
        registerFailureAction,
        (state): IAuthState => ({
            ...state,
            isSubmitting: false,
            isLoggedIn: true,
            error: null,
        })
    )
    // on(
    //     loginAction,
    //     (state): IAuthState => ({
    //         ...state,
    //         isSubmitting: true,
    //     })
    // ),
    // on(
    //     loginSuccessAction,
    //     (state): IAuthState => ({
    //         ...state,
    //         isSubmitting: false,
    //         isLoggedIn: true,
    //         error: null,
    //     })
    // ),
    // on(
    //     loginFailureAction,
    //     (state, action): IAuthState => ({
    //         ...state,
    //         isSubmitting: false,
    //         error: action.error,
    //     })
    // ),
    // on(
    //     logoutAction,
    //     (state): IAuthState => ({
    //         ...state,
    //         isSubmitting: true,
    //     })
    // ),
    // on(
    //     logoutSuccessAction,
    //     (state): IAuthState => ({
    //         ...state,
    //         isSubmitting: false,
    //         isLoggedIn: false,
    //         error: null,
    //     })
    // ),
    // on(
    //     logoutFailureAction,
    //     (state, action): IAuthState => ({
    //         ...state,
    //         isSubmitting: false,
    //         error: action.error,
    //     })
    // ),
);
export function authReducer(state: IAuthState, action: Action) {
    return reducer(state, action);
}
