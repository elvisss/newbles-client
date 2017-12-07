import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        LoginRoutingModule,
        SweetAlert2Module.forRoot(),
    ],
    declarations: [LoginComponent]
})
export class LoginModule {
}
