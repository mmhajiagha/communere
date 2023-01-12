import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelPagesComponent } from './admin-panel-pages.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPanelPagesComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/admin-panel-dashboard.module').then(m => m.AdminPanelDashboardModule)
      },
      {
        path: 'locations',
        loadChildren: () => import('./locations/admin-panel-locations.module').then(m => m.AdminPanelLocationsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelPagesRoutingModule {
}
