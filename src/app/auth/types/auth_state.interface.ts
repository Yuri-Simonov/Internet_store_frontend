import { ICurrentUser } from 'src/app/shared/types/current_user.interface';

export interface IAuthState {
    isSubmitting: boolean;
    isLoading: boolean;
    currentUser: ICurrentUser | null;
    isLoggedIn: boolean | null;
    error: string | null;
}
