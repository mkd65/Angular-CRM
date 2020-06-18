import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientStateEnum } from 'src/app/shared/enums/client-state-enum.enum';
import { Client } from 'src/app/shared/interfaces/client';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss']
})
export class FormClientComponent implements OnInit {

  myForm: FormGroup;
  clientStates = Object.values(ClientStateEnum);

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  @Input() initClient = { state: ClientStateEnum.ACTIVE, name: '', email: '', ca: 0, comment: '' }
  @Output() submittedClient = new EventEmitter<Client>();

  createForm() {
    this.myForm = this.fb.group({
      state: this.initClient.state,
      name: [this.initClient.name, Validators.min(1000)],
      email: [this.initClient.email, Validators.compose([Validators.email, Validators.required])],
      ca: [this.initClient.ca, Validators.min(1000)],
      comment: this.initClient.comment
    })
  }

  register() {
    console.log(this.myForm.value);
    console.log(this.initClient);
    this.submittedClient.emit(this.myForm.value);
  }

  get email() {
    return this.myForm.get('email');
  }

}
