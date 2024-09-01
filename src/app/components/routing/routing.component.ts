import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent implements OnInit {
  toastTime : number = 5000
  isShowToast : boolean = true
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.isShowToast = false
    }, this.toastTime)
  }

}
