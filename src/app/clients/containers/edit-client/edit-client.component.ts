import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../../services/client.service';
import { Route } from '@angular/compiler/src/core';
import { Client } from 'src/app/shared/interfaces/client';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.scss']
})
export class EditClientComponent implements OnInit {

  constructor(private route: ActivatedRoute, private clientService: ClientService, private router: Router) { }
  id; client;


  ngOnInit1(): void {
    this.route.paramMap.subscribe(
      (parmas) => {
        this.id = parmas.get('id');
        this.clientService.get(this.id).subscribe(
          (data) => this.client = data
        );
      }
    )
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params) => {
        const id = params.get('id');
        return this.clientService.get(id);
      })).subscribe(
        (data) => this.client = data
      );

  }

  editClient(data: Client) {
    data.id = this.id;
    this.clientService.update(data).subscribe((d) => {
      this.router.navigate(['/clients'])
    })
  }

}
