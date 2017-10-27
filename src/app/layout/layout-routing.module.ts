import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { UserGuard, AdminGuard } from '../shared';

const routes: Routes = [
    {
        path: '', component: LayoutComponent, canActivate: [UserGuard],
        children: [
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'atrapanieblas', loadChildren: './atrapanieblas/atrapanieblas.module#AtrapanieblasModule' },
            { path: 'dispositivos', loadChildren: './dispositivos/dispositivos.module#DispositivosModule' },
            { path: 'estadistica', loadChildren: './estadistica/estadistica.module#EstadisticaModule' },
            { path: 'mantenimiento', loadChildren: './maintenance/maintenance.module#MaintenanceModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            // { path: 'atrapanieblas/crear', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
        ]
    },
    {
        path: 'admin', component: LayoutComponent, canActivate: [AdminGuard],
        children: [
            { path: '', loadChildren: './admin/admin.module#AdminModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
