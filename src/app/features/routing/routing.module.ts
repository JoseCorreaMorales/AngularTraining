import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingComponent } from './components/routing/routing.component';
import { RouterModule } from '@angular/router';
import { RoutingRoutingModule } from './routing-routing.module';

@NgModule({
  declarations: [
    RoutingComponent
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
