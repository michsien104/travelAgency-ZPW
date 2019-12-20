import { Injectable } from '@angular/core';
import { Trip } from '../../_models/trip.model';
import { TRIPS } from './trips-list';

@Injectable({
  providedIn: 'root'
})
export class TripsServiceService {

  trips: Trip[];

  constructor() { 
    this.trips = TRIPS;
   }

  getProducts(){
    return this.trips;
  }

  getProduct(id: number){
    return this.trips.find(x => x._id == id);
  }

  addProduct(trip: Trip){
    this.trips.push(trip);
  }

  deleteProduct(id: number){
    this.trips.filter(x => x._id == id);
  }

}
