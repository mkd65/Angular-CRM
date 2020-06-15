import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    UiModule,
    CoreModule,
    IconsModule,
    TextModule,
    ClientsModule,
    OrdersModule,
    PageNotFoundModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
