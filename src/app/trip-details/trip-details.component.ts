import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { Trip } from '../_models/trip.model';
import { MongoTripRepoService } from "../_services/nodeJSData/mongo-trip-repo.service";
import { GetTripById } from '../_models/Responses/GetTripById';
@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css'],
  providers: [NgbCarouselConfig]
})

export class TripDetailsComponent implements OnInit {

  images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);
  trip : Trip;

  constructor(private route: ActivatedRoute, private tripRepository: MongoTripRepoService, config: NgbCarouselConfig) {
    this.getTrip();
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false; 
  }

  ngOnInit() {
    
  }

  getTrip(){
    this.route.paramMap.subscribe( params => {
      this.tripRepository.getTrip(params.get('id')).subscribe(
        (response: GetTripById) => {
          this.trip = response.trip;
        }
      );
    });
  }

}
