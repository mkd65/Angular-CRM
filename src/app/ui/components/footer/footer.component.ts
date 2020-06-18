import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { VersionService } from 'src/app/shared/version.service';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  myDate ;

  constructor(private versioService : VersionService) {
    this.myDate = moment().format('MMMM Do YYYY, h:mm:ss a'); // June 16th 2020, 3:21:41 pm
  }
  version : BehaviorSubject<number>;
  ngOnInit(): void {
    this.version = this.versioService.version;
  }

}
