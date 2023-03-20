import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from 'src/app/auth/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private toastr: ToastrService
    ) {}

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

    login(): void {
        this.authService
            .authUser(this.loginForm.value)
            .subscribe((data: any) => {
                if (data) {
                    this.toastr.success('Авторизация прошла успешно!');

                    this.router.navigate(['/']);
                }
            });
    }
}
