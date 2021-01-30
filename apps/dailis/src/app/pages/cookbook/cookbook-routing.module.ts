import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CookbookComponent } from './cookbook.component';

const routes: Routes = [{ path: '', component: CookbookComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CookbookRoutingModule { }
