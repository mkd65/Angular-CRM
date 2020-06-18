import { Component, OnInit } from '@angular/core';
import { VersionService } from 'src/app/shared/version.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
ver
  constructor(private versionService:VersionService) { }

  ngOnInit(): void {
  }

  up(){
    this.versionService.up();
  }
  down(){
    this.versionService.down();

  }

}
