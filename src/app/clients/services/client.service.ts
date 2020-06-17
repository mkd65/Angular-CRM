import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Client } from 'src/app/shared/interfaces/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http : HttpClient) { }

  public list(){
    return this.http.get<Client[]>(`${environment.urlApi}/clients`);
  }

  public get(id){
    return this.http.get<Client>(`${environment.urlApi}/clients/${id}`);
  }

  public delete(id){
    return this.http.delete(`${environment.urlApi}/clients/${id}`);
  }

  public update(client : Client){
    return this.http.put<Client>(`${environment.urlApi}/clients/${client.id}`,client);
  }

  public post(client : Client){
    return this.http.post<Client>(`${environment.urlApi}/clients`,client);
  }
}


