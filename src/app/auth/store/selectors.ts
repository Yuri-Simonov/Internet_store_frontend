import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IAuthState } from 'src/app/auth/types/auth_state.interface';

export const authFeatureSelector = createFeatureSelector<IAuthState>('auth');

export const isSubmittingSelector = createSelector(
    authFeatureSelector,
    (authState: IAuthState) => authState.isSubmitting
);

export const isErrorSelector = createSelector(
    authFeatureSelector,
    (authState: IAuthState) => authState.error
);

export const currentUserSelector = createSelector(
    authFeatureSelector,
    (authState: IAuthState) => authState.currentUser
);
