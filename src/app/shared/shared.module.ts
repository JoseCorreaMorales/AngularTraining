import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FourOFourComponent } from './components/not-found/four-ofour/four-ofour.component';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer/footer.component';



@NgModule({
  declarations: [
     NavbarComponent,
     FooterComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent, FooterComponent
  ]
})
export class SharedModule { }
