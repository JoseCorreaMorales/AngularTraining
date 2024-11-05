import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InitialPresentationComponent } from './features/home/components/initial-presentation/initial-presentation.component';
import { FourOFourComponent } from './shared/components/not-found/four-ofour/four-ofour.component';

const routes: Routes = [
  { path: '', component: InitialPresentationComponent }, // default route
  { path: '', loadChildren: () => import('./features/counter/counter.module').then(m => m.CounterModule) },
  { path: '', loadChildren: () => import('./features/inputOutputUsers/input-output-users.module').then(m => m.InputOutputUsersModule) },
  { path: '', loadChildren: () => import('./features/banana-box/banana-box.module').then(m => m.BananaBoxModule) },
  { path: '', loadChildren: () => import('./features/directives/directives.module').then(m => m.DirectivesModule) },
  { path: '', loadChildren: () => import('./features/forms/controls.module').then(m => m.ControlsModule) },
  { path: '', loadChildren: () => import('./features/routing/routing.module').then(m => m.RoutingModule) },
  { path: '**', component: FourOFourComponent }, // 404 route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
