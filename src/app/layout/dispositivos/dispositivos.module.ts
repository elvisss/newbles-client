import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DispositivosRoutingModule } from './dispositivos-routing.module';
import { DispositivosComponent } from './dispositivos.component';
import { PageHeaderModule } from './../../shared';

import { DispositivoService } from '../../services/dispositivo/dispositivo.service';
import { ServomotorService } from '../../services/servomotor/servomotor.service';
import { BateriaService } from '../../services/bateria/bateria.service';

import { ModalAddDispositivoComponent } from './components/modal/modal.component';
import { ModalDeleteDispositivoComponent } from './components/modal_delete/modal.component';

@NgModule({
    imports: [
        CommonModule,
        DispositivosRoutingModule,
        PageHeaderModule,
        FormsModule,
        NgbModule.forRoot()
    ],
    declarations: [
    	DispositivosComponent,
    	ModalAddDispositivoComponent,
    	ModalDeleteDispositivoComponent
    ],
    providers: [
        DispositivoService,
        ServomotorService,
        BateriaService
    ]
})
export class DispositivosModule { }
