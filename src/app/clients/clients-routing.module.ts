import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListClientsComponent } from './containers/list-clients/list-clients.component';
import { AddClientComponent } from './containers/add-client/add-client.component';
import { EditClientComponent } from './containers/edit-client/edit-client.component';


const routes: Routes = [
  { path: '', component: ListClientsComponent },
  { path: 'add', component: AddClientComponent },
  { path: 'edit', component: EditClientComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
