import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { CounterComponent } from './counter/counter.component';
//import { PersonsComponent } from './components/persons/persons.component';

import { CounterComponent } from  '../app/components/counter/counter.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserCardComponent } from './components/user-card/user-card.component'
//import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/parent/child/child.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { ControlsComponent } from './components/controls/controls.component';
import { FormControl } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
//import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    UserListComponent,
    UserCardComponent,
    ParentComponent,
    ChildComponent,
    DirectivesComponent,
    ControlsComponent,
    //PersonsComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //FormsModule,
    HttpClientModule,
    // Service Worker for PWA
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
   // FormData
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
