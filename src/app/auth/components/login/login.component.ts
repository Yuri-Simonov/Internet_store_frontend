import { select, Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

import { AuthService } from 'src/app/auth/services/auth.service';

import { loginAction } from 'src/app/auth/store/actions/login.action';

import { isSubmittingSelector } from 'src/app/auth/store/selectors';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    isSubmitting$: Observable<boolean>;
    loginForm: FormGroup;

    constructor(private fb: FormBuilder, private store: Store) {}

    ngOnInit(): void {
        this.initializeForm();
    }

    initializeForm(): void {
        this.loginForm = this.fb.group({
            email: [
                'test@mail.ru',
                [
                    Validators.required,
                    Validators.pattern(
                        /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu
                    ),
                ],
            ],
            password: [
                'qwerty123',
                [Validators.required, Validators.minLength(5)],
            ],
        });
    }

    initializeValues(): void {
        this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    }

    onSubmit(): void {
        this.store.dispatch(loginAction({ request: this.loginForm.value }));
    }
}
