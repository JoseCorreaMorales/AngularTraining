import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservableRoutingModule } from './observable-routing.module';
import { ObservableComponent } from './components/observable/observable.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ObservableComponent
  ],
  imports: [
    CommonModule,
    ObservableRoutingModule,
    RouterModule,
    SharedModule
  ],
  exports: [

  ]
})
export class ObservableModule { }
