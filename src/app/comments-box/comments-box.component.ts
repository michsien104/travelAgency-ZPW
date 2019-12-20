import { Component, OnInit } from '@angular/core';
import { COMMENTS } from "./comments";

@Component({
  selector: 'app-comments-box',
  templateUrl: './comments-box.component.html',
  styleUrls: ['./comments-box.component.css']
})
export class CommentsBoxComponent implements OnInit {

  comments: any = COMMENTS;
  newComment: any;

  constructor() { 
    this.newComment ={
      id: '',
      author:
      {
        name: '',
        email: '',
        website: ''
      },
      content: '',
      loved: ''
    }
  }

  ngOnInit() {
    console.log(this.comments)
  }

}
