import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { FourOFourComponent } from './shared/components/not-found/four-ofour/four-ofour.component';
import { RouterModule } from '@angular/router';
import { InputOutputUsersModule } from './features/inputOutputUsers/input-output-users.module';
import { SharedModule } from './shared/shared.module';
import { BananaBoxModule } from './features/banana-box/banana-box.module';
import { FormsModule } from './features/forms/forms.module';
import { DirectivesModule } from './features/directives/directives.module';
import { HomeModule } from './features/home/home.module';
import { RoutingModule } from './features/routing/routing.module';

@NgModule({
  declarations: [
    AppComponent,
    FourOFourComponent,
  ],
  imports: [
    InputOutputUsersModule,
    SharedModule,
    BananaBoxModule,
    FormsModule,
    DirectivesModule,
    HomeModule,
    RoutingModule,
    RouterModule,
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
