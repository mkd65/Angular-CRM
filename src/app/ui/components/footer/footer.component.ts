import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  myDate ;

  constructor() {
    this.myDate = moment().format('MMMM Do YYYY, h:mm:ss a'); // June 16th 2020, 3:21:41 pm
  }

  ngOnInit(): void {

  }

}
