import { createAction, props } from '@ngrx/store';

import { ActionTypes } from 'src/app/auth/store/action_types';

import { IRegisterRequest } from 'src/app/auth/types/register_request.interface';
import { ICurrentUser } from 'src/app/shared/types/current_user.interface';

export const registerAction = createAction(
    ActionTypes.REGISTER,
    props<{ request: IRegisterRequest }>()
);

export const registerSuccessAction = createAction(
    ActionTypes.REGISTER_SUCCESS,
    props<{ currentUser: ICurrentUser }>()
);

export const registerFailureAction = createAction(ActionTypes.REGISTER_FAILURE);
