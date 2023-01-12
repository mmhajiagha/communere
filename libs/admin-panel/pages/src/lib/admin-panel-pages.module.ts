import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelPagesRoutingModule } from './admin-panel-pages-routing.module';
import { AdminPanelPagesComponent } from './admin-panel-pages.component';
import { MainLayoutModule } from '@angular-test/admin-panel/core';

@NgModule({
  imports: [
    CommonModule,
    AdminPanelPagesRoutingModule,
    MainLayoutModule
  ],
  declarations: [AdminPanelPagesComponent]
})
export class AdminPanelPagesModule {
}
