import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardAdminComponent } from './dashboard/dashboard.component';
import { AtrapanieblasComponent } from './atrapanieblas/atrapanieblas.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard', component: DashboardAdminComponent
      },
      {
        path: 'atrapanieblas', component: AtrapanieblasComponent
      }
    ]
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
