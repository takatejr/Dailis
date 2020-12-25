import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/shared/services/auth.service';
import { HttpClient } from '@angular/common/http';

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
        name: ['', Validators.required],
        password: ['', Validators.required]
    });

    onSubmit() {
        const credentials = this.loginForm.value;
        this.authService.login(credentials);
    }

  constructor(
      private formBuilder: FormBuilder,
      private http: HttpClient,
      private authService: AuthenticationService
  ) {
  }

  ngOnInit() {
  }

}
