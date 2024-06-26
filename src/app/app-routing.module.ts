import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { ParentComponent } from './components/parent/parent.component';


const routes: Routes = [
    { path: 'counter', component: CounterComponent },
    { path: 'users', component: UserListComponent },
    { path: 'parent', component: ParentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
