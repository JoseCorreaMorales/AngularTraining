import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './components/counter/counter.component';
import { CounterRoutingModule } from './counter-routing.module';


@NgModule({
  declarations: [

    CounterComponent
  ],
  imports: [
    CommonModule,
    CounterRoutingModule
  ],
  exports : [
    CounterComponent
  ]
})
export class CounterModule { }
