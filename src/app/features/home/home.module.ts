import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitialPresentationComponent } from './components/initial-presentation/initial-presentation.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    InitialPresentationComponent

  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    InitialPresentationComponent
  ]
})
export class HomeModule { }
