import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { InputOuputRoutingModule } from './input-ouput-routing.module';


@NgModule({
  declarations: [
    UserListComponent, UserCardComponent
  ],
  imports: [
    CommonModule,
    InputOuputRoutingModule
  ],
  exports: [
    UserListComponent
  ]
})
export class InputOutputUsersModule { }
