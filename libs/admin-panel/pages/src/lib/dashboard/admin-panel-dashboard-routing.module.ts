import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelDashboardComponent } from './admin-panel-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPanelDashboardComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelDashboardRoutingModule { }
