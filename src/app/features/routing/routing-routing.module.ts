import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RoutingComponent } from './components/routing/routing.component';

const routes: Routes = [
  { path: 'routing/:helloAngular', component: RoutingComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class RoutingRoutingModule { }
