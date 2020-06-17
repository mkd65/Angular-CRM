import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { CoreModule } from './core/core.module';
import { IconsModule } from './icons/icons.module';
import { OrdersModule } from './orders/orders.module';
import { SharedModule } from './shared/shared.module';
import { LoginModule } from './login/login.module';
import { TextModule } from './text/text.module';
import { ClientsModule } from './clients/clients.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';


// second paramater is optional
registerLocaleData(localeFr,'fr-FR')


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LoginModule,
    AppRoutingModule,
    UiModule,
    CoreModule,
    IconsModule,
    TextModule,
    NgbModule
  ],
  providers: [{provide : LOCALE_ID, useValue : 'fr-FR'}],
  bootstrap: [AppComponent]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    // Use a custom replacer to display function names in the route configs
    const replacer = (key, value) => (typeof value === 'function') ? value.name : value;

    console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}
