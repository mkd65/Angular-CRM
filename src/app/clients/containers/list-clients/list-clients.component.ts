import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientService } from '../../services/client.service';
import { Client } from 'src/app/shared/interfaces/client';
import { ClientStateEnum } from 'src/app/shared/enums/client-state-enum.enum';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.scss']
})
export class ListClientsComponent implements OnInit {
  clients: Client[] = [];
  clientStates = Object.values(ClientStateEnum);
  constructor(private router: Router, private clientService: ClientService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('data = ');
    /*this.clientService.list().subscribe(
      (data) =>  {this.clients = data;console.log('datas = '+data); }
    ); */

    this.route.data.subscribe((d: { clients: Client[] }) => {
      this.clients = d.clients;
    });
  }

  goToAddClient() {
    this.router.navigate(['/clients', 'add'])
  }

  updateClient(event, client) {
    console.log(event);
    this.clientService.update(client).subscribe(
      (data) => {
        console.log(data);
        alert('good update');
      }
    )
  }
}
