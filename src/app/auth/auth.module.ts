import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { RegisterComponent } from 'src/app/auth/components/register/register.component';
import { LoginComponent } from 'src/app/auth/components/login/login.component';

const routes: Routes = [
    {
        path: 'register',
        component: RegisterComponent,
    },
    { path: 'login', component: LoginComponent },
];

@NgModule({
    declarations: [RegisterComponent, LoginComponent],
    imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule],
})
export class AuthModule {}
