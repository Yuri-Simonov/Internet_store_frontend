import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from 'src/app/auth/services/auth.service';
import { registerAction } from 'src/app/auth/store/actions/register.action';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;

    constructor(private fb: FormBuilder, private store: Store) {}

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

    onSubmit(): void {
        this.store.dispatch(
            registerAction({ request: this.registerForm.value })
        );
    }
}
