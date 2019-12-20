import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Trip } from '../_models/trip.model';
import { TripsComponent } from "../trips/trips.component";
import { ShoppingRepositoryService } from '../_services/nodeJSData/shopping-repository.service';
import { AuthService } from '../_services/authentication/auth.service';
import { MongoTripRepoService } from '../_services/nodeJSData/mongo-trip-repo.service';

@Component({
  selector: '[app-single-trip]',
  templateUrl: './single-trip.component.html',
  styleUrls: ['./single-trip.component.css']
})
export class SingleTripComponent implements OnInit {
  
  private _parent: TripsComponent;
  @Input() 
  trip: Trip;
  @Input() 
  set parent(value: TripsComponent ) { this._parent = value; }
  @Output() 
  deleteTrip: EventEmitter<Trip> = new EventEmitter<Trip>();



  constructor(public shoppingCartRepository: ShoppingRepositoryService, private tripRepository: MongoTripRepoService) { }

  ngOnInit(){
  }

  public reserveTrip(trip: Trip) {
    this._parent.reservedTrips++;
    this.shoppingCartRepository.addTripToShoppingCart(trip).subscribe( response => {
        if (response['success'] == true){
          this.tripRepository.bookTrip(trip._id).subscribe( response => {
            if (response['success'] == true){
              trip.availablePlaces--; 
            }
          });
        }
    })
    
  }

  public freeTrip(trip: Trip) {
    this._parent.reservedTrips--;
    this.shoppingCartRepository.unbookTripFromShoppingCartById(trip).subscribe( response => {
      if (response['success'] == true){
        this.tripRepository.unBookTrip(trip._id).subscribe( response => {
          if (response['success'] == true){
            trip.availablePlaces++; 
          }
        });
      }
  })
  }

  public removeTrip(trip: Trip){
    this.deleteTrip.emit(trip);
  }
}
