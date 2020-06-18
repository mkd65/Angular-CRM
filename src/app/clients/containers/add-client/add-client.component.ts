import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from 'src/app/shared/interfaces/client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {

  constructor(private clientService : ClientService ,private router : Router) { }

  ngOnInit(): void {
  }

  addClient(data : Client){
      this.clientService.post(data).subscribe((d) => {
        this.router.navigate(['/clients'])
      })
  }

}
