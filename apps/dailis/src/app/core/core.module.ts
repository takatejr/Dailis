import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {ErrorComponent} from './error/error.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ErrorComponent
  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CoreModule { }
