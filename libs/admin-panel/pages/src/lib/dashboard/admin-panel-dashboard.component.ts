import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'admin-panel-dashboard',
  templateUrl: './admin-panel-dashboard.component.html',
  styleUrls: ['./admin-panel-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminPanelDashboardComponent {
}
