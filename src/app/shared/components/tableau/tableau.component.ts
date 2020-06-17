import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss']
})
export class TableauComponent implements OnInit {

 @Input() headers = ['A','B','C'];

  constructor() { }

  ngOnInit(): void {
  }

}
