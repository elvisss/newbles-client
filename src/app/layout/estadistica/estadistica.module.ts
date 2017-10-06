import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EstadisticaRoutingModule } from './estadistica-routing.module';
import { EstadisticaComponent } from './estadistica.component';
import { PageHeaderModule } from './../../shared';

import { DispositivoService } from '../../services/dispositivo/dispositivo.service';

import { ChartsModule } from 'ng2-charts';

@NgModule({
    imports: [
        CommonModule,
        EstadisticaRoutingModule,
        PageHeaderModule,
        FormsModule,
        ChartsModule,
        NgbModule.forRoot()
    ],
    declarations: [
    	EstadisticaComponent
    ],
    providers: [
        DispositivoService
    ]
})
export class EstadisticaModule { }
