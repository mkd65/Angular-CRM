import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.scss']
})
export class ListOrdersComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  goToAddOrder(){
    this.router.navigate(['/orders','add'])
  }
}
