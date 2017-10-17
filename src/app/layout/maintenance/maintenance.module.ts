import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaintenanceRoutingModule } from './maintenance-routing.module';
import { PageHeaderModule } from './../../shared';

import { BateriaComponent } from './bateria/bateria.component';
import { BateriaAddComponent } from './bateria/components/bateria-add/bateria-add.component';

import { BateriaService } from '../../services/bateria/bateria.service';

@NgModule({
    imports: [
        CommonModule,
        MaintenanceRoutingModule,
        PageHeaderModule,
        FormsModule,
        NgbModule.forRoot()
    ],
    declarations: [
    	BateriaComponent,
        BateriaAddComponent
    ],
    providers: [
        BateriaService
    ]
})
export class MaintenanceModule { }
