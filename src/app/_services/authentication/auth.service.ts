import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { Roles } from '../../_models/User';
import { Credentials } from '../../_models/Credentials';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit{

  readonly authState$: Observable<User | null> = this.fireAuth.authState;
  user$: Observable<User>;

  constructor(private fireAuth: AngularFireAuth) {}

  ngOnInit(){
  }

  get user(): User | null {
    return this.fireAuth.auth.currentUser;
  }
  
  login(credentials: Credentials) {
    return this.fireAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
  }
  
  register(credentials: Credentials) {
    return this.fireAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
  }
  
  logout() {
    return this.fireAuth.auth.signOut();
  }
}
