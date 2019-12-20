import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../_services/authentication/auth.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    registerForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

    constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private authenticationService: AuthService) {
        if (this.authenticationService.user) {
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    get form() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.register(this.registerForm.value)
            .then( (result) => {
              this.loading = false;
              this.router.navigate([this.returnUrl]);
            }).catch( error => {
              this.loading = false;
              console.log("Register error: " + error)
            });
    }
}
