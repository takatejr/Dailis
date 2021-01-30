import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../../shared/services/auth/auth.service'

@Component({
  selector: 'dailis-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = this.formBuilder.group({
    name: ['', Validators.required],
    password: ['', Validators.required]
  });

  get form() { return this.loginForm.controls }

  login() {
    if (this.loginForm.invalid) return
    this.authService.login(this.form.name.value, this.form.password.value)
  }

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService
  ) { }

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
