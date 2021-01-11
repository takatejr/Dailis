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
  loginForm = this.formBuilder.group({
    name: ['', Validators.required],
    password: ['', Validators.required]
  });

  login() {
    if (this.loginForm.invalid) return
    
    const credentials = this.loginForm.value;
    this.authService.login(credentials);
  }

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
  }

  backToPreviousPage() {
    history.back()
  }

  loginAndBackToPreviousPage() {
    if (this.loginForm.invalid) {
      return window.alert('Login or password empty')
    }
    history.back()
  }
}
