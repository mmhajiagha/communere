import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestMapComponent } from './test-map.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

const MATERIAL_MODULES = [
  MatButtonModule
];

@NgModule({
  declarations: [
    TestMapComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ...MATERIAL_MODULES
  ],
  exports: [
    TestMapComponent
  ]
})
export class TestMapModule {
}
