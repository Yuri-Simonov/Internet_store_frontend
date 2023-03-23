import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';

import { RegisterComponent } from 'src/app/auth/components/register/register.component';
import { LoginComponent } from 'src/app/auth/components/login/login.component';

import { RegisterEffect } from 'src/app/auth/store/effects/register.effect';
import { StoreModule } from '@ngrx/store';
import { authReducer } from 'src/app/auth/store/reducers';

const routes: Routes = [
    {
        path: 'register',
        component: RegisterComponent,
    },
    { path: 'login', component: LoginComponent },
];

@NgModule({
    declarations: [RegisterComponent, LoginComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        EffectsModule.forFeature([RegisterEffect]),
        StoreModule.forFeature('auth', authReducer),
    ],
})
export class AuthModule {}
