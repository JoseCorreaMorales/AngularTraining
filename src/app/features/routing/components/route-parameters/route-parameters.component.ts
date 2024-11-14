import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoutingService } from '../../services/routing.service';

/* Route suscribing to paramMap:
1 Obsevable/dimamic: the fun its called everytime the params changes
*/

/* Static approach:
2 getting the info only for the frist time (when the component its assembled)
*/

interface Product {
  title: string,
  description: string,
  image: string,
  category: string
}

@Component({
  selector: 'route-parameters',
  templateUrl: './route-parameters.component.html',
  styleUrls: ['./route-parameters.component.css']
})
export class RouteParametersComponent implements OnInit {
  toastTime: number = 5000
  isShowToast: boolean = true
  routeInfo!: string
  message!: string
  products: Product[] = []
  currentQueryParams: any = {};

  constructor(
    private router: Router,
    private RoutingService: RoutingService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.currentQueryParams = params;
      this.fetchProducts(params);
    });
  }

  fetchProducts(params: { [key: string]: string }): void {
    this.RoutingService.getProducts(params).subscribe((data) => {
      this.products = data;
      console.log(this.products);
    });
  }

  getRouteParam() {
    this.route.paramMap.subscribe(paramMap => {
      this.message = paramMap.get('helloAngular') || ''

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
