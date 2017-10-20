import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BateriaComponent } from './bateria/bateria.component';
import { DisenioComponent } from './disenio/disenio.component';
import { MallaComponent } from './malla/malla.component';
import { ServomotorComponent } from './servomotor/servomotor.component';
import { TanqueComponent } from './tanque/tanque.component';

const routes: Routes = [
    { path: 'bateria', component: BateriaComponent },
    { path: 'disenio', component: DisenioComponent },
    { path: 'malla', component: MallaComponent },
    { path: 'servomotor', component: ServomotorComponent },
    { path: 'tanque', component: TanqueComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaintenanceRoutingModule { }
