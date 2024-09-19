import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitialPresentationComponent } from './components/initial-presentation/initial-presentation.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    InitialPresentationComponent

  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    InitialPresentationComponent
  ]
})
export class HomeModule { }
