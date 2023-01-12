import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

declare var particlesJS: any;

@Component({
  selector: 'admin-panel-auth',
  templateUrl: './admin-panel-auth.component.html',
  styleUrls: ['./admin-panel-auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminPanelAuthComponent implements OnInit {

  ngOnInit(): void {
    particlesJS.load('particles-js', 'assets/particles.json', function() {
      console.log('callback - particles.js config loaded');
    });
  }
}
