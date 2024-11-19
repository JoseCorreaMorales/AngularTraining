import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FourOFourComponent } from './components/not-found/four-ofour/four-ofour.component';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SharedRoutingModule } from './shared-routing.module';



@NgModule({
  declarations: [
     NavbarComponent,
     FooterComponent,
     ProfileComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    NavbarComponent, FooterComponent
  ]
})
export class SharedModule { }
