import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  constructor(private router: Router, private viewportScroller: ViewportScroller) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        //movies to (0, 0) when the route changes
        this.viewportScroller.scrollToPosition([0, 0]);
      }
    });
  }
}
