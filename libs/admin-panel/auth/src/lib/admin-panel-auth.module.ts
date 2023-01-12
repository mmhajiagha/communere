import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelAuthComponent } from './admin-panel-auth.component';
import { AdminPanelAuthRoutingModule } from './admin-panel-auth-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AdminPanelAuthRoutingModule
  ],
  declarations: [
    AdminPanelAuthComponent
  ]
})
export class AdminPanelAuthModule {
}
