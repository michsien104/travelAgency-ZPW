import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};  

@Injectable({
  providedIn: 'root'
})
export class MongoTripRepoService {

  constructor(private http: HttpClient) { }

  private serverApi= 'http://localhost:3000/triplist';

  public getAllLists(): Observable<any> {
    let URL = `${this.serverApi}`;
    return this.http.get(URL);
  }

  public deleteTrip(tripId: number) {
    let URL = `${this.serverApi}/${tripId}`;
    return this.http.delete(URL, httpOptions);
  }

  public getTrip(tripId) {
    let URL = `${this.serverApi}/${tripId}`;
    return this.http.get(URL);
  }

  public addTrip(body) {
    let URL = `${this.serverApi}`;
    return this.http.post(URL, body, httpOptions);
  }

  public bookTrip(id) {
    let URL = `${this.serverApi}/bookTrip/${id}`;
    return this.http.post(URL, httpOptions);
  }

  public unBookTrip(id) {
    let URL = `${this.serverApi}/unBookTrip/${id}`;
    return this.http.post(URL, httpOptions);
  }
}
