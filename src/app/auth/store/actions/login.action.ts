import { createAction, props } from '@ngrx/store';

import { ActionTypes } from 'src/app/auth/store/action_types';

import { ILoginRequest } from 'src/app/auth/types/login_request.interface';
import { ICurrentUser } from 'src/app/shared/types/current_user.interface';

export const loginAction = createAction(
    ActionTypes.LOGIN,
    props<{ request: ILoginRequest }>()
);

export const loginSuccessAction = createAction(
    ActionTypes.LOGIN_SUCCESS,
    props<{ currentUser: ICurrentUser }>()
);

export const loginFailureAction = createAction(ActionTypes.LOGIN_FAILURE);
