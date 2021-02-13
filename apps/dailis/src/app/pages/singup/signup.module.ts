import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingupComponent } from './singup.component';
import { SignupRoutingModule } from './signup-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [SingupComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SignupRoutingModule
  ]
})
export class SignupModule { }
