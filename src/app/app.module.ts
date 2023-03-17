import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from 'src/app/auth/auth.module';
import { HeaderModule } from 'src/app/shared/modules/header/header.module';
import { HomeModule } from 'src/app/home/home.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HeaderModule,
        AuthModule,
        HomeModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
