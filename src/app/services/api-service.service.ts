import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiServiceService {

  constructor(private api: HttpClient) {
  }

  getUsers(): Observable<any> {
      return this.api.get<any>("https://jsonplaceholder.typicode.com/users")
    }
}