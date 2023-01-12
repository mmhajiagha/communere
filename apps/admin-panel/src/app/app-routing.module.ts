import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuardService } from '@angular-test/admin-panel/core';

const routes: Routes = [
  {
    path: '',
    canActivate: [LoginGuardService],
    loadChildren: () => import('@angular-test/admin-panel/pages').then((m) => m.AdminPanelPagesModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('@angular-test/admin-panel/auth').then(m => m.AdminPanelAuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
