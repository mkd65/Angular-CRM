import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListOrdersComponent } from './containers/list-orders/list-orders.component';
import { AddOrderComponent } from './containers/add-order/add-order.component';
import { EditOrderComponent } from './containers/edit-order/edit-order.component';


const routes: Routes = [
  { path: '', component: ListOrdersComponent },
  { path: 'add', component: AddOrderComponent },
  { path: 'edit', component: EditOrderComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
