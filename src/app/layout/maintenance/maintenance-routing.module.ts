import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BateriaComponent } from './bateria/bateria.component';

const routes: Routes = [
    { path: 'bateria', component: BateriaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaintenanceRoutingModule { }
