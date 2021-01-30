import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CookbookRoutingModule } from './cookbook-routing.module';
import { CookbookComponent } from './cookbook.component';


@NgModule({
  declarations: [CookbookComponent],
  imports: [
    CommonModule,
    CookbookRoutingModule
  ]
})
export class CookbookModule { }
