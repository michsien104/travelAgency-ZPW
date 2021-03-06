import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { TRIPS } from "../simpleListData/trips-list";

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService extends InMemoryDbService {
  
  constructor() {
    super();
  }

  createDb() {
    const trips = [
      { id: 1, name: 'Spain adventure', country: 'Spain', since: new Date("2019-11-30"), untill: new Date("2019-12-05"), price: 2400, totalPlaces: 5, description: 'Barcelona and Madrid.', image: '../../assets/Spain2.jpg', availablePlaces: 5, rating: 2 },
      { id: 2, name: 'Denmark adventure', country: 'Denmark', since: new Date("2020-11-30"), untill: new Date("2019-12-03"), price: 1800, totalPlaces: 50, description: 'Copenhaga.', image: '../../assets/denmark.jpg', availablePlaces: 50, rating: 7 },
      { id: 3, name: 'Austria adventure', country: 'Austria', since: new Date("2020-08-30"), untill: new Date("2020-11-30"), price: 3425, totalPlaces: 70, description: 'Vienna and South Tirol.', image: '../../assets/austria.jpg', availablePlaces: 70, rating: 3 },
      { id: 4, name: 'Italy adventure', country: 'Italy', since: new Date("2019-11-30"), untill: new Date("2019-12-30"), price: 2588, totalPlaces: 150, description: 'Visit in Barcelona Madrid.', image: '../../assets/italy.jpg', availablePlaces: 150, rating: 8 },
      { id: 5, name: 'Poland adventure', country: 'Poland', since: new Date("2019-11-30"), untill: new Date("2019-11-31"), price: 1550, totalPlaces: 90, description: 'Visit in Barcelona Madrid.', image: '../../assets/poland.jpg', availablePlaces: 90, rating: 9 },
      { id: 6, name: 'Finland adventure', country: 'Finland', since: new Date("2019-12-15"), untill: new Date("2019-12-22"), price: 5460, totalPlaces: 10, description: 'Visit in Barcelona Madrid.', image: '../../assets/finland.jfif', availablePlaces: 10, rating: 8 },
      { id: 7, name: 'Norway adventure', country: 'Norway', since: new Date("2019-11-30"), untill: new Date("2019-12-06"), price: 1000, totalPlaces: 10, description: 'Norway officially the  ...', image: '../../assets/norway.jfif', availablePlaces: 10, rating: 5 },
      { id: 8, name: 'Ukraine adventure', country: 'Ukraine', since: new Date("2019-07-30"), untill: new Date("2019-08-08"), price: 1000, totalPlaces: 10, description: 'Visit in Barcelona Madrid.', image: '../../assets/ukraine.jfif', availablePlaces: 10, rating: 5 },
      { id: 9, name: 'Belarus adventure', country: 'Belarus', since: new Date("2019-11-30"), untill: new Date("2019-12-05"), price: 1000, totalPlaces: 10, description: 'Visit in Barcelona Madrid.', image: '../../assets/belarus.jpg', availablePlaces: 10, rating: 5 },
      { id: 10, name: 'Holand adventure', country: 'Holand', since: new Date("2019-11-30"), untill: new Date("2019-12-05"), price: 1000, totalPlaces: 10, description: 'Visit in Barcelona Madrid.', image: '../../assets/holand.jpg', availablePlaces: 10, rating: 5 },
    ];
    return { trips };
  }

}
