import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlsComponent } from './components/controls/controls.component';


@NgModule({
  declarations: [
    ControlsComponent

  ],
  imports: [
    CommonModule
  ],
  exports : [
    ControlsComponent
  ]
})
export class FormsModule { }
