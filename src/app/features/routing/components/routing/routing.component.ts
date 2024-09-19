import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { RoutingService } from './routing.service';

interface Product {
  title: string,
  description : string,
  image: string,
  category: string
}
@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})



export class RoutingComponent implements OnInit {
  toastTime : number = 5000
  isShowToast : boolean = true
  routeInfo! : string

  constructor(
    private router : Router,
    private RoutingService: RoutingService,
    private route : ActivatedRoute) { }
  products : Product[] = []
  currentQueryParams: any = {};


  ngOnInit(): void {
    setTimeout(() => {
      this.isShowToast = false
    }, this.toastTime)

    const routeInfo = this.route.snapshot.paramMap.get('helloAngular')

    this.route.queryParams.subscribe((params) => {
      this.currentQueryParams = params;
      this.fetchProducts(params);
    });


    /* Route suscribing to paramMap:
    1 Obsevable/dimamic: the fun its called everytime the params changes
    */
    /* this.router.paramMap.subscribe (paramMap => {
       const mesage = paramMap.get('helloAngular')
     }) */

     /* Static approach:
     1 getting the info only for the frist time (when the component its assembled)
     */
  }

  fetchProducts(params: { [key: string]: string }): void {
    this.RoutingService.getProducts(params).subscribe((data) => {
      this.products = data;
    });
  }

  getRouteParam(): void {
    this.route.paramMap.subscribe (paramMap => {
      const mesage = paramMap.get('helloAngular')
      this.routeInfo = mesage || ''
    })
  }

  updateQueryParams(newParams: { [key: string]: string }): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { ...this.currentQueryParams, ...newParams },
      queryParamsHandling: 'merge',
    });
  }
}
