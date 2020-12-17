import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loading = false;
  submitted = false;
  returnUrl: string;

    loginForm = this.formBuilder.group({
        login: ['', Validators.required],
        password: ['', Validators.required]
    })

    onSubmit() {
        console.log(this.loginForm.value)
    }

  constructor(
      private formBuilder: FormBuilder,
    //   private route: ActivatedRoute,
    //   private router: Router,
    //   private authenticationService: AuthenticationService,
  ) {
    //   // redirect to home if already logged in
    //   if (this.authenticationService.currentUserValue) {
    //       this.router.navigate(['/']);
    //   }
  }

  ngOnInit() {
  }

//   // convenience getter for easy access to form fields
//   get f() { return this.loginForm.controls; }

//   onSubmit() {
//       this.submitted = true;
//       console.log(this.loginForm.value)
//       // reset alerts on submit
//       // this.alertService.clear();

//       // stop here if form is invalid
//       if (this.loginForm.invalid) {
//           return;
//       }

//       this.loading = true;
//       this.authenticationService.login(this.f.username.value, this.f.password.value)
//           .pipe(first())
//           .subscribe(
//               data => {
//                   this.router.navigate([this.returnUrl]);
//               },
//               error => {
//                   // this.alertService.error(error);
//                   this.loading = false;
//               });
//   }
}
