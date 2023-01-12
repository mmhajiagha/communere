import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { CoreModule } from '@angular-test/admin-panel/core';
import { PAGES_MENU_ITEMS } from './configs/pages-menu';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      closeButton: true,
      progressBar: true,
      positionClass: 'toast-bottom-left'
    }),
    CoreModule.forRoot({ pagesMenuItems: PAGES_MENU_ITEMS })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
