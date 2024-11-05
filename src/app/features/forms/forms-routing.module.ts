import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainFormsComponet } from './components/main-forms-component/main-forms-component.component';

const routes: Routes = [
  { path: 'controls', component: MainFormsComponet }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class FormsRoutingModule { }
