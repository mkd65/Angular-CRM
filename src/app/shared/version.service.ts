import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { startWith, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VersionService {
private Pversion = new BehaviorSubject(9);
version = this.Pversion.asObservable().pipe(
  startWith(10),
  tap(console.log));

  constructor() { }

  add(nbr){
    this.Pversion.next(nbr);
  }

  up(){
    //this.version++;
    this.Pversion.next(this.Pversion.value+1)
  }

  down(){
    //this.version--;
    this.Pversion.next(this.Pversion.value-1)

  }
}
