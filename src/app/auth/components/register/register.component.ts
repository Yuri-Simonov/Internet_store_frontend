import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from 'src/app/auth/auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;

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
        this.registerForm = this.fb.group({
            fullName: ['some', [Validators.required, Validators.minLength(3)]],
            email: [
                'some@mail.ru',
                [
                    Validators.required,
                    Validators.pattern(
                        /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu
                    ),
                ],
            ],
            phone: [
                '89154561212',
                [Validators.required, Validators.pattern(/[7|8]\d{10}/)],
            ],
            password: [
                'qwerty123',
                [Validators.required, Validators.minLength(5)],
            ],
        });
    }

    register(): void {
        this.authService
            .registerUser(this.registerForm.value)
            .subscribe((data: any) => {
                if (data) {
                    this.toastr.success('Регистрация прошла успешно!');

                    this.router.navigate(['/']);
                }
            });
    }
}
