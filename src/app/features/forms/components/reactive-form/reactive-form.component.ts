import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'reative-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  myForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    /* phone: new FormControl('', [Validators.required, Validators.email]), */

  })

  constructor() { }

  ngOnInit(): void {
  }

  send()  {

  }

  get FormValid() : boolean {
    return this.myForm.valid
  }

  get nameControl() : FormControl {
    return this.myForm.get('name') as FormControl
  }

  get lastnameControl() : FormControl {
    return this.myForm.get('lastname') as FormControl
  }

  get phoneControl() : FormControl {
    return this.myForm.get('phone') as FormControl
  }

}
