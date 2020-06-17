import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../../services/client.service';
import { Client } from 'src/app/shared/interfaces/client';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.scss']
})
export class ListClientsComponent implements OnInit {
  clients : Client[] =[];
  constructor(private router : Router ,private clientService : ClientService) { }

  ngOnInit(): void {
    console.log('data = ');
    this.clientService.list().subscribe(
      (data) =>  {this.clients = data;console.log('datas = '+data); }
    );
  }

  goToAddClient(){
    this.router.navigate(['/clients','add'])
  }
}
