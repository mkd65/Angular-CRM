import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() text : string;
  @Output() btnSubmitted = new EventEmitter();

  btnClick(){
    this.btnSubmitted.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
