import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingComponent } from './components/routing/routing.component';
import { RouterModule } from '@angular/router';
import { RoutingRoutingModule } from './routing-routing.module';
import { RouteParametersComponent } from './components/route-parameters/route-parameters.component';
import { AdvancedRoutingComponent } from './components/advanced-routing/advanced-routing.component';
import { AuthModule } from '../auth/auth.module';

@NgModule({
  declarations: [
    RoutingComponent,
    RouteParametersComponent,
    AdvancedRoutingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RoutingRoutingModule,
    AuthModule
  ],
  exports: [
    RoutingComponent
  ]
})
export class RoutingModule { }
