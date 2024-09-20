import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesComponent } from './directives/directives.component';
import { MyOwnDirectiveDirective } from './directives/my-own-directive.directive';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    DirectivesComponent, MyOwnDirectiveDirective

  ],
  imports: [
    CommonModule,
    RouterModule
  ], exports: [
    DirectivesComponent
  ]
})
export class DirectivesModule { }
