export class Trip {
    _id: number;
    name: string;
    country: string;
    since: Date;
    untill: Date;
    price: number;
    totalPlaces: number;
    description: string;
    image: string; 
    availablePlaces: number;
    rating: number;

    constructor(obj: any){
        this.name = obj.name;
        this.country = obj.country;
        this.since = obj.since;
        this.untill = obj.untill;
        this.price = obj.price;
        this.totalPlaces = obj.totalPlaces;
        this.description = obj.description;
        this.image = obj.image;
        this.availablePlaces = obj.totalPlaces;
        this.rating = 0;
    }
  }