import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ClientService } from 'src/app/clients/services/client.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientListResolverService implements Resolve<any>{

  constructor(private clientService : ClientService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
   // return this.clientService.list();
   return this.clientService.list().pipe(
    catchError( err => of([]))
  );
  }
}
//
