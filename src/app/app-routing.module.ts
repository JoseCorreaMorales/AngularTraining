import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './features/counter/components/counter/counter.component';
/* import { UserListComponent } from './components/user-list/user-list.component'; */
import { UserListComponent } from './features/inputOutputUsers/components/user-list/user-list.component';
import { ParentComponent } from './features/banana-box/components/parent/parent.component';
import { DirectivesComponent } from './features/directives/directives/directives.component';
import { ControlsComponent } from './features/forms/components/controls/controls.component';
import { InitialPresentationComponent } from './features/home/components/initial-presentation/initial-presentation.component';
import { RoutingComponent } from './features/routing/components/routing/routing.component';
import { FourOFourComponent } from './shared/components/not-found/four-ofour/four-ofour.component';


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
