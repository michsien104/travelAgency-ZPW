import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Input, ErrorHandler} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TripsComponent } from './trips/trips.component';
import { HeaderComponent } from './header/header.component';
import { SingleTripComponent } from './single-trip/single-trip.component';
import { RatingComponent } from './rating/rating.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NewTripsComponent } from './new-trips/new-trips.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { listFilterPipe } from './Utils/listFilter.pipe';
import { TripDetailsComponent } from './trip-details/trip-details.component';
import { CommentsBoxComponent } from './comments-box/comments-box.component';
import { HttpClientModule } from "@angular/common/http";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from '../environments/environment';
import { AuthGuardService } from './_services/authentication/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    TripsComponent,
    HeaderComponent,
    SingleTripComponent,
    RatingComponent,
    NewTripsComponent,
    ShoppingCartComponent,
    listFilterPipe,
    TripDetailsComponent,
    CommentsBoxComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})

export class AppModule { }
