import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { VersionService } from 'src/app/shared/version.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private versioService : VersionService) { }


  version;
  ngOnInit(): void {
    this.versioService.version
    .subscribe(
      (data) =>     this.version = data
    );

  }


}
