import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Trip } from '../../_models/trip.model';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TripCRUDService {

  productsUrl = 'http://localhost:4200/api/trips';

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Trip[]> {
    return this.httpClient.get<Trip[]>(this.productsUrl);
  }

  getProduct(id: number): Observable<Trip> {
    return this.httpClient.get<Trip>(this.productsUrl + "/" + id);
  }

  addProduct(product: Trip): Observable<Object> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.httpClient.post(this.productsUrl, product, httpOptions).pipe(
            tap(p => console.log(`added product ${p}`)),
            catchError(this.handleError)
    );;
  }

  deleteProduct(product: Trip | number): Observable<Trip> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
      const id = typeof product === 'number' ? product : product._id;
    
    return this.httpClient.delete<Trip>(this.productsUrl + "/" + id, httpOptions).pipe(
            tap(_ => console.log(`deleted Product id=${id}`)),
            catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.log(error);
    return throwError(error);
  }
  
}
