import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelDashboardRoutingModule } from './admin-panel-dashboard-routing.module';
import { AdminPanelDashboardComponent } from './admin-panel-dashboard.component';
import { MatButtonModule } from '@angular/material/button';

const MATERIAL_MODULES = [
  MatButtonModule
];

@NgModule({
  imports: [
    CommonModule,
    ...MATERIAL_MODULES,
    AdminPanelDashboardRoutingModule
  ],
  declarations: [AdminPanelDashboardComponent]
})
export class AdminPanelDashboardModule {
}
