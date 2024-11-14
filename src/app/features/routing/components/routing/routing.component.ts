import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { RoutingService } from '../../services/routing.service';

interface Product {
  title: string,
  description: string,
  image: string,
  category: string
}
@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})

export class RoutingComponent implements OnInit {
  toastTime: number = 5000
  isShowToast: boolean = true
  routeInfo!: string
  message!: string

  constructor(
    private router: Router,
    private RoutingService: RoutingService,
    private route: ActivatedRoute) { }
  products: Product[] = []
  currentQueryParams: any = {};


  ngOnInit(): void {
    setTimeout(() => {
      this.isShowToast = false
    }, this.toastTime)

    const routeInfo = this.route.snapshot.paramMap.get('helloAngular')

    this.route.paramMap.subscribe(paramMap => {
      const mesage = paramMap.get('helloAngular')
      this.routeInfo = mesage || ''
    })
  }
}
