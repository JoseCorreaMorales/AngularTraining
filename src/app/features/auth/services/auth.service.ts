import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = new BehaviorSubject<Boolean>(false);
  loggedIn$ = this.loggedIn.asObservable();

  constructor() { }

  logIn(): void {
    this.loggedIn.next(true);
    //this.loggedIn = true; // If not using BehaviorSubject
  }

  logOut(): void {
    this.loggedIn.next(false);
  }
}
