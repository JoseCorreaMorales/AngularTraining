import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent implements OnInit {
  toastTime : number = 5000
  isShowToast : boolean = true
  routeInfo! : string

  constructor(private router : ActivatedRoute) { }


  ngOnInit(): void {
    setTimeout(() => {
      this.isShowToast = false
    }, this.toastTime)


    /* Route suscribing to paramMap:
    1 Obsevable/dimamic: the fun its called everytime the params changes
    */
    /* this.router.paramMap.subscribe (paramMap => {
       const mesage = paramMap.get('helloAngular')
     }) */

     /* Static approach:
     1 getting the info only for the frist time (when the component its assembled)
     */
     const routeInfo = this.router.snapshot.paramMap.get('helloAngular')


  }

  getRouteParam(): void {
    this.router.paramMap.subscribe (paramMap => {
      const mesage = paramMap.get('helloAngular')
      this.routeInfo = mesage || ''
    })
  }
}
