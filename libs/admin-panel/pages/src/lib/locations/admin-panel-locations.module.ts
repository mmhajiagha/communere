import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelLocationsRoutingModule } from './admin-panel-locations-routing.module';
import { AdminPanelLocationsComponent } from './admin-panel-locations.component';
import { MatButtonModule } from '@angular/material/button';
import { TestMapModule } from '@angular-test/admin-panel/utils';
import { LocationAddComponent } from './components/location-add/location-add.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatTooltipModule
];

@NgModule({
  imports: [
    CommonModule,
    ...MATERIAL_MODULES,
    AdminPanelLocationsRoutingModule,
    TestMapModule,
    FormsModule
  ],
  declarations: [
    AdminPanelLocationsComponent,
    LocationAddComponent
  ]
})
export class AdminPanelLocationsModule {
}
