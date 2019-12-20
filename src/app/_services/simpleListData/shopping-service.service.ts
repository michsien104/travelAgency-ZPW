import { Injectable } from '@angular/core';
import { ShoppingCart } from "../../_models/shoppingCart.model";
import { Trip } from "../../_models/trip.model";
@Injectable({
  providedIn: 'root'
})
export class ShoppingServiceService {

  shopping: ShoppingCart;

  constructor() {
    this.shopping = <ShoppingCart>{
      userId: 1,
      products: [{}],
      totalPrice: 0,
      totalTakenPlaces: 0
    } 
  }

  getProducts(){
    return this.shopping;
  }

  addProduct(trip: Trip){
    this.shopping.totalTakenPlaces++;
    this.shopping.totalPrice += trip.price;
    let product = this.shopping.products.find( x => x.tripId == trip._id);;
    if(product != undefined){
      product.takenPlaces++;
    }
  }

  deleteProduct(trip: Trip){
    this.shopping.totalTakenPlaces--;
    this.shopping.totalPrice -= trip.price;
    let product = this.shopping.products.find( x => x.tripId == trip._id);
    if(product != undefined && product.takenPlaces > 1){
      product.takenPlaces--;
    }
    else if(product != undefined && product.takenPlaces == 1){
        let index = this.shopping.products.indexOf(product);
        this.shopping.products.splice(index, 1);
    }
    else {
      console.log("No such product in shoppingCart");
    }
  }
}
