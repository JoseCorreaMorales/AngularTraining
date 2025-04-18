import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/features/auth/services/auth.service';

@Component({
  selector: 'advanced-routing',
  templateUrl: './advanced-routing.component.html',
  styleUrls: ['./advanced-routing.component.css'],
})
export class AdvancedRoutingComponent  {
  // If using pipe Async i.e *ngIf="isUserLoggedIn$ | async"
  //isUserLoggedIn$ = this.authService.loggedIn$;
  //isUserLoggedIn$!: Boolean;
  //private subscription!: Subscription;

  isUserLoggedIn$ = this.authService.loggedIn$;

  constructor(private authService : AuthService) { }

/*   ngOnInit(): void {
    this.subscription = this.authService.loggedIn$.subscribe((loggedIn) => this.isUserLoggedIn$ = loggedIn);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  } */

    logOut() : void {
      this.authService.logOut();
      console.log("LOGOUT");
    }


}
