import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { TableauComponent } from './components/tableau/tableau.component';
import { StarPipe } from './pipes/star.pipe';
import { StateDirective } from './directives/state.directive';



@NgModule({
  declarations: [ButtonComponent, TableauComponent, StarPipe, StateDirective],
  imports: [
    CommonModule
  ],
  exports: [ButtonComponent, TableauComponent,StarPipe,StateDirective]
})
export class SharedModule { }
