import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {
  control: any = "Control"
  activebtn :boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  activateButton() : void {
     this.activebtn = !this.activebtn
  }

}
