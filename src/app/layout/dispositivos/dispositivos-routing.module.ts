import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DispositivosComponent } from './dispositivos.component';

const routes: Routes = [
    { path: '', component: DispositivosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DispositivosRoutingModule { }
