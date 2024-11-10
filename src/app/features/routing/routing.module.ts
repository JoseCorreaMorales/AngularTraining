import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingComponent } from './components/routing/routing.component';
import { RouterModule } from '@angular/router';
import { RoutingRoutingModule } from './routing-routing.module';
import { RouteParametersComponent } from './components/route-parameters/route-parameters.component';

@NgModule({
  declarations: [
    RoutingComponent,
    RouteParametersComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RoutingRoutingModule
  ],
  exports: [
    RoutingComponent
  ]
})
export class RoutingModule { }
