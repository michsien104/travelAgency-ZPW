import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from "../_models/shoppingCart.model";
import { ShoppingRepositoryService } from '../_services/nodeJSData/shopping-repository.service';
import { MongoTripRepoService } from "../_services/nodeJSData/mongo-trip-repo.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  shopping: ShoppingCart;
  constructor(public shoppingCartRepository: ShoppingRepositoryService, public tripsService: MongoTripRepoService, private router: Router) { }

  ngOnInit() {
    this.shoppingCartRepository.getShoppingCartForCurrentUser().subscribe( response => {
      this.shopping = response['shoppingCart'];
      if(this.shopping) {
        this.shopping.products.forEach(element => {
          this.tripsService.getTrip(element.tripId).subscribe( response => {
           element.trip = response['trip'];
          });
       });
      }
    });
  }

  redirect(product){
    this.router.navigate([`/dashboard/tripDetails/${product.tripId}`]);
  }

  public sum(){
    this.shopping.products.reduce(function(prev, cur) {
      return prev + cur.trip.price;
    }, 0);
  }
    


}
