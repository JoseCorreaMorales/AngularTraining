
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {
  private apiURL : string = "https://fakestoreapi.com/products"


  getProducts(params: { [key: string]: string }): Observable<any> {
    const httpParams = new HttpParams({ fromObject: params });
    return this.http.get<any>(this.apiURL, { params: httpParams });
  }

  constructor(private http : HttpClient) { }
}
