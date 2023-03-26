import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from 'src/app/home/components/home/home.component';

import { AccessGuard } from 'src/app/shared/guards/access.guard';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AccessGuard],
    },
];

@NgModule({
    declarations: [HomeComponent],
    imports: [CommonModule, RouterModule.forChild(routes)],
})
export class HomeModule {}
