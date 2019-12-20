import { Component, OnInit } from '@angular/core';
import { AuthService } from './_services/authentication/auth.service';
import { Router } from '@angular/router';
import { User } from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'tripsAgency';
  currentUser: User | null;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(){
        this.authService.authState$.subscribe(data => this.currentUser = data);
  }

  logOut(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
