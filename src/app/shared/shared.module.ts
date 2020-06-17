import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { TableauComponent } from './components/tableau/tableau.component';
import { StarPipe } from './pipes/star.pipe';



@NgModule({
  declarations: [ButtonComponent, TableauComponent, StarPipe],
  imports: [
    CommonModule
  ],
  exports: [ButtonComponent, TableauComponent,StarPipe]
})
export class SharedModule { }
