import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Trip } from "../_models/trip.model";
import { debounceTime } from 'rxjs/operators';
import { MongoTripRepoService } from '../_services/nodeJSData/mongo-trip-repo.service';

@Component({
  selector: 'app-new-trips',
  templateUrl: './new-trips.component.html',
  styleUrls: ['./new-trips.component.css']
})

export class NewTripsComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder : FormBuilder, private tripRepository: MongoTripRepoService) { }

  formErrors = {
    image: '',
    name: '',
    country: '',
    since: '',
    untill: '',
    price: '',
    totalPlaces: '',
    description: '',
  }
 
  private validationMessages = {
    name: {
      required: 'Name is required.'
    },
    country: {
      required: 'Country is required.'
    },
    since: {
      required: 'Since date is required.'
    },
    untill: {
      required: 'Untill date is required.'
    },
    price: {
      required: 'Price is required.'
    },
    totalPlaces: {
      required: 'Total places number is required.'
    }
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      image: [''],
      name: ['', Validators.required ],
      country: ['', Validators.required ],
      since: ['', Validators.required ],
      untill: ['', Validators.required ],
      price: ['', [ Validators.required ] ],
      totalPlaces: ['', Validators.required ],
      description: [''],
      availablePlaces: [''],
      rating:['']
    });

    this.form.valueChanges.pipe(debounceTime(1000)).subscribe((value) => {
      this.onControlValueChanged();
    });
  }

  onControlValueChanged() {
    const form = this.form;
   
    for (let field in this.formErrors) {
      this.formErrors[field] = '';
      let control = form.get(field); 
      
      if (control && !control.valid) {
        const validationMessages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += validationMessages[key] + ' ';
        }
      }
    }
  }

  onSubmit(){
    if(this.form.valid){
      let trip: Trip = new Trip(this.form.value);
      let body = JSON.stringify(trip);
      this.tripRepository.addTrip(body).subscribe(
        (response) => {
          console.log(response)
        }
      )
    } 
    else {
      this.onControlValueChanged();
    }
    
  }

}
