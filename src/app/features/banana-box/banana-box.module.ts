import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { BananaBoxRoutingModule } from './banana-box-routing.module';


@NgModule({
  declarations: [
    ParentComponent,
    ChildComponent

  ],
  imports: [
    CommonModule,
    BananaBoxRoutingModule
  ], exports: [
    ParentComponent
  ]
})
export class BananaBoxModule { }
