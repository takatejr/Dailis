import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../shared/services/auth/auth.service'

@Component({
  selector: 'dailis-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent {
  loading= false;
  registerForm = this.formBuilder.group({
    login: ['', Validators.required],
    email: ['', Validators.required],
    password1: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required, Validators.minLength(6)]]
  })

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) { }

  get form() { return this.registerForm.controls }

  register() {
    if (this.registerForm.invalid) return
    if (this.form.password1.value !== this.form.password2.value) return window.alert('Passwords aren\'t that same.')

    const payload = {
      login: this.form.login.value,
      email: this.form.email.value,
      password: this.form.password1.value
    }

    return this.authenticationService.register(payload).subscribe(e => e)
  }
}
