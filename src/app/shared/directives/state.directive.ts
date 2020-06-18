import { Directive, Input, HostBinding, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnInit,OnChanges{

  @Input() state: string;
  @HostBinding('class') nomClass:string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.nomClass = this.formatClass();
  }

  ngOnInit(): void {
  }

  private formatClass(){
    return `state-${this.state.toLowerCase()}`;
  }

}
