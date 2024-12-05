import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FourOFourComponent } from './components/not-found/four-ofour/four-ofour.component';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SharedRoutingModule } from './shared-routing.module';
import { BoldTextPipe } from './pipes/boldText/bold-text.pipe';



@NgModule({
  declarations: [
     NavbarComponent,
     FooterComponent,
     ProfileComponent,
     BoldTextPipe,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    NavbarComponent, FooterComponent, BoldTextPipe
  ]
})
export class SharedModule { }
