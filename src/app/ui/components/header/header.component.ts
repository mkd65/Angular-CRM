import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { VersionService } from 'src/app/shared/version.service';
import { map } from 'rxjs/operators'
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
    .pipe(map(v => v*10))
    .subscribe(
      (data) =>     this.version = data
    );

  }


}
