import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { ParentComponent } from './components/parent/parent.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { ControlsComponent } from './components/controls/controls.component';
import { InitialPresentationComponent } from './components/initial-presentation/initial-presentation.component';
import { RoutingComponent } from './components/routing/routing.component';
import { FourOFourComponent } from './components/four-ofour/four-ofour.component';


const routes: Routes = [
    { path: '', component: InitialPresentationComponent },
    { path: 'counter', component: CounterComponent },
    { path: 'users', component: UserListComponent },
    { path: 'banana-box', component: ParentComponent },
    { path: 'directives', component: DirectivesComponent },
    { path: 'controls', component: ControlsComponent },
    { path: 'routing/:helloAngular', component: RoutingComponent },
    { path: '**', component: FourOFourComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
