import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ILoginRequest } from 'src/app/auth/types/login_request.interface';
import { IRegisterRequest } from 'src/app/auth/types/register_request.interface';
import { ICurrentUser } from 'src/app/shared/types/current_user.interface';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private http: HttpClient) {}

    register(request: IRegisterRequest): Observable<ICurrentUser> {
        return this.http.post<ICurrentUser>(
            'http://localhost:4444/auth/register',
            request
        );
    }

    login(request: ILoginRequest): Observable<ICurrentUser> {
        return this.http.post<ICurrentUser>(
            'http://localhost:4444/auth/login',
            request
        );
    }
}
