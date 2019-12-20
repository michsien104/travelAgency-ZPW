import { Trip } from "./trip.model";
export interface ShoppingCart {
    userId: number;
    products: [{
        tripId: number;
        trip: Trip;
        takenPlaces: number;
    }]
    totalPrice: number;
    totalTakenPlaces: number;
  }