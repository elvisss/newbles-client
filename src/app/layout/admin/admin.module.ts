import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

import { PageHeaderModule } from './../../shared';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardAdminComponent } from './dashboard/dashboard.component';
import { AtrapanieblasComponent } from './atrapanieblas/atrapanieblas.component';

import { AtrapanieblaService } from '../../services/atrapaniebla/atrapaniebla.service';

@NgModule({
    imports: [
        CommonModule,
        NgbDropdownModule.forRoot(),
        AdminRoutingModule,
        TranslateModule,
        PageHeaderModule
    ],
    declarations: [
        DashboardAdminComponent,
        AtrapanieblasComponent
    ],
    providers: [
        AtrapanieblaService
    ]
})
export class AdminModule { }
