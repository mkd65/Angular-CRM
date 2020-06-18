import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { ListOrdersComponent } from './containers/list-orders/list-orders.component';
import { AddOrderComponent } from './containers/add-order/add-order.component';
import { EditOrderComponent } from './containers/edit-order/edit-order.component';
import { SharedModule } from '../shared/shared.module';
import { TemplatesModule } from '../templates/templates.module';


@NgModule({
  declarations: [ListOrdersComponent, AddOrderComponent, EditOrderComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SharedModule,
    TemplatesModule
  ]
})
export class OrdersModule { }
