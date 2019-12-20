import { PipeTransform, Pipe } from '@angular/core';
import { Trip } from '../_models/trip.model';

@Pipe({
    name: 'listFilter'
})

export class listFilterPipe implements PipeTransform {
    transform(trips: Trip[], name: string, country: string, since: Date, untill: Date ){
        if(!trips){
            return trips;
        }
        
        let result: Trip[] = trips;
        if(name != null){
            result = result.filter( trip => trip.name.toLowerCase().indexOf(name.toLowerCase()) != -1 );
        }
        if(country != null){
            result = result.filter( trip => trip.country.toLowerCase().indexOf(country.toLowerCase()) != -1);
        }
        if(since != null){
            let sinceDate = new Date(since);
            result = result.filter( trip => trip.since >= sinceDate);
        }
        if(untill != null){
            let untillDate = new Date(untill);
            result = result.filter( trip => trip.untill <= untillDate);
        }

        return result;
    }
}