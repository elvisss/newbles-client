import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AtrapanieblasRoutingModule } from './atrapanieblas-routing.module';
import { AtrapanieblasComponent } from './atrapanieblas.component';
import { PageHeaderModule } from './../../shared';

import { AtrapanieblaService } from '../../services/atrapaniebla/atrapaniebla.service';
import { DispositivoService } from '../../services/dispositivo/dispositivo.service';

import { ModalComponent } from './components/modal/modal.component';
import { ModalUpdateComponent } from './components/modal_update/modal.component';
import { ModalDeleteComponent } from './components/modal_delete/modal.component';
import { ModalCoordsComponent } from './components/modal_coords/modal.component';

import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';

@NgModule({
    imports: [
        CommonModule,
        AtrapanieblasRoutingModule,
        PageHeaderModule,
        FormsModule,
        NgbModule.forRoot(),
        SweetAlert2Module.forRoot(),
    ],
    declarations: [
    	AtrapanieblasComponent,
    	ModalComponent,
        ModalUpdateComponent,
    	ModalDeleteComponent,
        ModalCoordsComponent
    ],
    providers: [
        AtrapanieblaService,
        DispositivoService
    ]
})
export class AtrapanieblasModule { }
