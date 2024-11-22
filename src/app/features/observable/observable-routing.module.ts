import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ObservableComponent } from './components/observable/observable.component';

const routes: Routes = [
  { path: 'observable', component: ObservableComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class ObservableRoutingModule { }
