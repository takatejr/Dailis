import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './core/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { SingupComponent } from './components/login/singup/singup.component';
import { DaylisComponent } from './components/daylis/daylis.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { CookbookComponent } from './components/cookbook/cookbook.component';
import {DaylisDetailsComponent} from './components/daylis/daylis-details/daylis-details.component';

const routes: Routes = [
  { path: 'login',
    component: LoginComponent,
    children: [
      {
        path: 'singup',
        component: SingupComponent,
      }
    ],
  },
  { path: 'daylis', component: DaylisComponent},
  { path: 'daylis/:id', component: DaylisDetailsComponent},
  { path: '', redirectTo: 'daylis', pathMatch: 'full'},
  { path: 'recipes', component: RecipesComponent },
  { path: 'cookbook', component: CookbookComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
