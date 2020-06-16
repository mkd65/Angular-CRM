import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { ListOrdersComponent } from './containers/list-orders/list-orders.component';
import { AddOrderComponent } from './containers/add-order/add-order.component';
import { EditOrderComponent } from './containers/edit-order/edit-order.component';


@NgModule({
  declarations: [ListOrdersComponent, AddOrderComponent, EditOrderComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
