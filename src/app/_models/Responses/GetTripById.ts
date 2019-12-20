import { Trip } from '../trip.model';

export interface GetTripById {
    success: boolean;
    trip: Trip;
  }