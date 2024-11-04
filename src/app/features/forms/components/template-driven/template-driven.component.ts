import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
  name: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
