import { Action, createReducer, on } from '@ngrx/store';
import {
    loginAction,
    loginFailureAction,
    loginSuccessAction,
} from 'src/app/auth/store/actions/login.action';

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
        (state, action): IAuthState => ({
            ...state,
            currentUser: action.currentUser,
            isSubmitting: false,
        })
    ),
    on(
        registerFailureAction,
        (state): IAuthState => ({
            ...state,
            isSubmitting: false,
            error: null,
        })
    ),
    on(
        loginAction,
        (state): IAuthState => ({
            ...state,
            isSubmitting: true,
        })
    ),
    on(
        loginSuccessAction,
        (state, action): IAuthState => ({
            ...state,
            isSubmitting: false,
            currentUser: action.currentUser,
            error: null,
        })
    ),
    on(
        loginFailureAction,
        (state): IAuthState => ({
            ...state,
            isSubmitting: false,
        })
    )
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
