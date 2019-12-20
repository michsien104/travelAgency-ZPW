import { Component, OnInit, Input } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input() tripRating: number;
  selected = 0;
  hovered = 0;
  readonly = false;

  constructor() { }

  ngOnInit() {
    this.selected = this.tripRating;
  }

  onRatingClick(){
    this.readonly = true;
  }
}
