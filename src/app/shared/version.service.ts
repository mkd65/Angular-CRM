import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VersionService {
version = new BehaviorSubject(9);

  constructor() { }

  up(){
    //this.version++;
    this.version.next(this.version.value+1)
  }

  down(){
    //this.version--;
    this.version.next(this.version.value-1)

  }
}
