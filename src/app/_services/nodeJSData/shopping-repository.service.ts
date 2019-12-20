import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Trip } from 'src/app/_models/trip.model';
import { User } from 'firebase';
import { AuthService } from '../authentication/auth.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};  

@Injectable({
  providedIn: 'root'
})
export class ShoppingRepositoryService {
  private serverApi= 'http://localhost:3000/shoppingcart';
  private currentUser: User | null;

  constructor(private http: HttpClient, private authService: AuthService) { 
    this.authService.authState$.subscribe(data => this.currentUser = data);
  }

  public addTripToShoppingCart(trip: Trip){
    let URL = `${this.serverApi}`;
    let body =  {
                  "userId": this.currentUser.email,
                  "tripId": trip._id,
                  "reservedPlaces": 1,
                  "price": trip.price
                }
    return this.http.post(URL, body, httpOptions);
  }

  public unbookTripFromShoppingCartById(trip: Trip){
    let URL = `${this.serverApi}/${this.currentUser.email}/${trip._id}/${trip.price}`;
    return this.http.delete(URL, httpOptions);
  }

  public getShoppingCartForCurrentUser() {
    let URL = `${this.serverApi}/${this.currentUser.email}`;
    return this.http.get(URL, httpOptions);
  }

}
