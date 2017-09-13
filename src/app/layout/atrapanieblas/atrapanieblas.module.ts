import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtrapanieblasRoutingModule } from './atrapanieblas-routing.module';
import { AtrapanieblasComponent } from './atrapanieblas.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [
        CommonModule,
        AtrapanieblasRoutingModule,
        PageHeaderModule
    ],
    declarations: [AtrapanieblasComponent]
})
export class AtrapanieblasModule { }
