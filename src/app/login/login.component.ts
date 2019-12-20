import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../_services/authentication/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  returnUrl: string;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private authenticationService: AuthService) {
      if (this.authenticationService.user) {
          this.router.navigate(['/']);
      }
  }

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
      });

      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get form() { return this.loginForm.controls; }

  onSubmit() {
      this.submitted = true;
      if (this.loginForm.invalid) {
          return;
      }
      this.loading = true;
      var credentials = { email: this.form.username.value, password: this.form.password.value };
      this.authenticationService.login(credentials)
          .then( (result) => {
            this.loading = false;
            this.router.navigate([this.returnUrl]);
            console.log("Result: " + result)
          }).catch( error => {
            this.loading = false;
            console.log("Login error: " + error)
          });
  }

}
