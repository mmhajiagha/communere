import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelAuthComponent } from './admin-panel-auth.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPanelAuthComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
      },
      {
        path: 'login',
        loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'register',
        loadChildren: () => import('./modules/register/register.module').then(m => m.RegisterModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelAuthRoutingModule {
}
