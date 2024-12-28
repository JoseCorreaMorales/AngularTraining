import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesComponent } from './components/directives/directives.component';
import { MyOwnDirectiveDirective } from './components/directives/my-own-directive.directive';
import { RouterModule } from '@angular/router';
import { DirectivesRoutingModule } from './directives-routing.module';


@NgModule({
  declarations: [
    DirectivesComponent, MyOwnDirectiveDirective

  ],
  imports: [
    CommonModule,
    RouterModule,
    DirectivesRoutingModule
  ], exports: [
    DirectivesComponent
  ]
})
export class DirectivesModule { }
