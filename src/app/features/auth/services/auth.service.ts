import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BehaviorSubject, catchError, EMPTY, ignoreElements, Observable, Observer, tap, throwError } from 'rxjs';
import { SuccessfulLogin } from '../../../models/SuccessfulLogin';
import { InvalidCredentialsError } from '../errors/invalid-credentials.error';
import { environment } from 'src/environments/environment';
import {LoginCredentials }  from '../../../models/LoginCredentials'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = environment.API_BASE_URL;
  loggedIn = new BehaviorSubject<Boolean>(false);
  loggedIn$ = this.loggedIn.asObservable();
  private _authToken: string | null = null;


  public get getAuthToken(): string | null {
    const token = this._authToken || sessionStorage.getItem('authToken');
    if (token && !this._authToken) {
      this._authToken = token;
      this.loggedIn.next(true);
    }
    return this._authToken;
  }

  constructor(private httpClient : HttpClient, private router : Router) {
    this.checkInitialLoginState();
  }

  private checkInitialLoginState(): void {
    const token = sessionStorage.getItem('authToken');
    if (token) {
      this._authToken = token;
      this.loggedIn.next(true);
    }
  }


  logIn(credentials : LoginCredentials): Observable<never> {
    return this.httpClient
      .post<SuccessfulLogin>(`${this.baseUrl}/login`, credentials)
      .pipe(
        tap(({ token }) => this.handleSuccesfulLogin(token)),
        ignoreElements(),
        catchError((error) => {
          if (error.status === 401) {
            return throwError(new InvalidCredentialsError());
          }
          alert('Se ha producido un error. Intentelo de nuevo más tarde.');
          return EMPTY;
        })
      );
  }

  private handleSuccesfulLogin(token: string): void {
    this.loggedIn.next(true);
    this._authToken = token;
    sessionStorage.setItem('authToken', token);
    this.redirectToHome();
  }

  private redirectToHome(): void {
    this.router.navigate(['/profile']);
  }

  logOut(): void {
    this.loggedIn.next(false);
    this._authToken = null;
    sessionStorage.removeItem('authToken');
    this.redirectToHome();
  }
}
