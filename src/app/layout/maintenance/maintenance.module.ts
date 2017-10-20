import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaintenanceRoutingModule } from './maintenance-routing.module';
import { PageHeaderModule } from './../../shared';

import { BateriaComponent } from './bateria/bateria.component';
import { BateriaAddComponent } from './bateria/components/bateria-add/bateria-add.component';
import { BateriaDeleteComponent } from './bateria/components/bateria-delete/bateria-delete.component';
import { BateriaService } from '../../services/bateria/bateria.service';

import { DisenioComponent } from './disenio/disenio.component';
import { DisenioAddComponent } from './disenio/components/disenio-add/disenio-add.component';
import { DisenioDeleteComponent } from './disenio/components/disenio-delete/disenio-delete.component';
import { DisenioService } from '../../services/disenio/disenio.service';

import { MallaComponent } from './malla/malla.component';
import { MallaAddComponent } from './malla/components/malla-add/malla-add.component';
import { MallaDeleteComponent } from './malla/components/malla-delete/malla-delete.component';
import { MallaService } from '../../services/malla/malla.service';

import { ServomotorComponent } from './servomotor/servomotor.component';
import { ServomotorAddComponent } from './servomotor/components/servomotor-add/servomotor-add.component';
import { ServomotorDeleteComponent } from './servomotor/components/servomotor-delete/servomotor-delete.component';
import { ServomotorService } from '../../services/servomotor/servomotor.service';

import { TanqueComponent } from './tanque/tanque.component';
import { TanqueAddComponent } from './tanque/components/tanque-add/tanque-add.component';
import { TanqueDeleteComponent } from './tanque/components/tanque-delete/tanque-delete.component';
import { TanqueService } from '../../services/tanque/tanque.service';

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
        BateriaAddComponent,
        BateriaDeleteComponent,
        DisenioComponent,
        DisenioAddComponent,
        DisenioDeleteComponent,
        MallaComponent,
        MallaAddComponent,
        MallaDeleteComponent,
        ServomotorComponent,
        ServomotorAddComponent,
        ServomotorDeleteComponent,
        TanqueComponent,
        TanqueAddComponent,
        TanqueDeleteComponent
    ],
    providers: [
        BateriaService,
        DisenioService,
        MallaService,
        ServomotorService,
        TanqueService
    ]
})
export class MaintenanceModule { }
