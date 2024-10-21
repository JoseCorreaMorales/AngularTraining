import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TemplateDrivenComponent } from './components/template-driven/template-driven.component';
import { MainFormsComponet } from './components/main-forms-component/main-forms-component.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';


@NgModule({
  declarations: [

    ReactiveFormComponent,
    TemplateDrivenComponent,
    MainFormsComponet

  ],
  imports: [
    CommonModule, ReactiveFormsModule, RouterModule
  ],
  exports : [
   // ReativeFormComponent
   MainFormsComponet

  ]
})
export class FormsModule { }
