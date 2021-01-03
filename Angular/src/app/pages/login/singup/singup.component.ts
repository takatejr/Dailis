import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DaylisService } from '../../../shared/services/daylis.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private daylisService: DaylisService
  ) {
      // redirect to home if already logged in
    //   if (this.accountService.userValue) {
    //       this.router.navigate(['/']);
    //   }
  }

  ngOnInit() {
      this.form = this.formBuilder.group({
          login: ['', Validators.required],
          email: ['', Validators.required],
          password1: ['', [Validators.required, Validators.minLength(6)]],
          password2: ['', [Validators.required, Validators.minLength(6)]]
      });
  }

  get f() { return this.form.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.form.invalid) {
          return;
      }

      this.loading = true;
      // this.daylisService.register(this.form.value)
      //     .pipe(first())
      //     .subscribe(
      //         data => {
      //             this.alertService.success('Registration successful', { keepAfterRouteChange: true });
      //             this.router.navigate(['../login'], { relativeTo: this.route });
      //         },
      //         error => {
      //             this.alertService.error(error);
      //             this.loading = false;
      //         });
  }
}
