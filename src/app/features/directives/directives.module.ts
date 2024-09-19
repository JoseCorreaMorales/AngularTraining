import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesComponent } from './directives/directives.component';
import { MyOwnDirectiveDirective } from './directives/my-own-directive.directive';


@NgModule({
  declarations: [
    DirectivesComponent, MyOwnDirectiveDirective

  ],
  imports: [
    CommonModule
  ], exports: [
    DirectivesComponent
  ]
})
export class DirectivesModule { }
