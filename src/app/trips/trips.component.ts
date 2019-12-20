import { Component, OnInit } from '@angular/core';
import { Trip } from '../_models/trip.model';
import { FormGroup, FormControl } from '@angular/forms';
import { MongoTripRepoService } from '../_services/nodeJSData/mongo-trip-repo.service';
import { DeleteRes } from "../_models/Responses/DeleteRes";
import { Router } from '@angular/router';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})

export class TripsComponent implements OnInit {

  trips: Trip[];
  reservedTrips: number = 0;
  myFilter: FormGroup;

  constructor(public tripRepository: MongoTripRepoService, private router: Router) { 
  }

  ngOnInit() {
    this.getProducts();
    this.myFilter = new FormGroup({
      name: new FormControl(),
      country: new FormControl(),
      since: new FormControl(),
      untill: new FormControl()
   });
  }

  get self(): TripsComponent {
    return this;
  }

  deleteTrip(trip: Trip){
    this.tripRepository.deleteTrip(trip._id).subscribe(
      (response: DeleteRes) => {
        if(response.success == true){
          this.trips = this.trips.filter((elem) => {
            return elem._id !== response.id;
          });
        }
      }
    )
  }

  getProducts(): void {
    this.tripRepository.getAllLists().subscribe(data => {
      this.trips = data.trips;
    }); 
  }

  toggleSideBar(){
    let sideBar = document.getElementById("sidebar");
    sideBar.classList.toggle("active");
  }

  redirectToDetails(trip){
    this.router.navigate([`/dashboard/tripDetails/${trip._id}`]);
  }
}




