import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TripsComponent } from './trips/trips.component';
import { NewTripsComponent } from './new-trips/new-trips.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { TripDetailsComponent } from './trip-details/trip-details.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './_services/authentication/auth-guard.service';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full', canActivate: [AuthGuardService] },
  { path: 'dashboard', component: TripsComponent, canActivate: [AuthGuardService] },
  { path: 'newTrip', component: NewTripsComponent, canActivate: [AuthGuardService] },
  { path: 'shoppingCart', component: ShoppingCartComponent, canActivate: [AuthGuardService] },
  { path: 'dashboard/tripDetails/:id', component: TripDetailsComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
