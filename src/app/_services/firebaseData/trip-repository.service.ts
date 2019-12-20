import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Trip } from 'src/app/_models/trip.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TripRepositoryService implements OnInit {

  tripCollection: AngularFirestoreCollection<Trip>;
  trips: Observable<Trip[]>;

  constructor(private db: AngularFirestore) { 
    this.tripCollection = this.db.collection<Trip>('trip');
    this.trips = this.tripCollection.valueChanges();
  }

  ngOnInit(){
    
  }

  addTrip(trip: Trip){
    this.tripCollection.add(trip);
  }

  deleteTrip(trip: Trip){
    let tripDoc = this.db.doc(`items/$(item.id)`);
    tripDoc.delete();
  }

  getTrips(){
    return this.trips;
  }
}
