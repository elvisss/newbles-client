import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtrapanieblasComponent } from './atrapanieblas.component';

const routes: Routes = [
    { path: '', component: AtrapanieblasComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtrapanieblasRoutingModule { }
