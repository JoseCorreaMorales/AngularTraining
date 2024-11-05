import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  user = {
    name: "Hello",
    lastname: "Angular",
    phonenumber: 14,
  };


  send(form: any): void {
    console.log(form.value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
