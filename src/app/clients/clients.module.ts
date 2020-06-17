import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ListClientsComponent } from './containers/list-clients/list-clients.component';
import { AddClientComponent } from './containers/add-client/add-client.component';
import { EditClientComponent } from './containers/edit-client/edit-client.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ListClientsComponent, AddClientComponent, EditClientComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule
  ]
})
export class ClientsModule { }
