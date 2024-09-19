import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FourOFourComponent } from './components/not-found/four-ofour/four-ofour.component';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';



@NgModule({
  declarations: [
     NavbarComponent, 
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class SharedModule { }
