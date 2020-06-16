import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent } from './containers/ui/ui.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [UiComponent, HeaderComponent, NavComponent ,FooterComponent],
  imports: [
    CommonModule,RouterModule
  ],
  exports: [UiComponent]
})
export class UiModule { }
