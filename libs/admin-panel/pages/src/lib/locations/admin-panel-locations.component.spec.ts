import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPanelLocationsComponent } from './admin-panel-locations.component';

describe('AdminPanelLocationsComponent', () => {
  let component: AdminPanelLocationsComponent;
  let fixture: ComponentFixture<AdminPanelLocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminPanelLocationsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AdminPanelLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
