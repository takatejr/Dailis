import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './core/error/error.component';
import { LoginComponent } from './pages/login/login.component';
import { SingupComponent as SignupComponent } from './pages/login/singup/singup.component';
import { DaylisComponent } from './pages/daylis/daylis.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { CookbookComponent } from './pages/cookbook/cookbook.component';
import {DaylisDetailsComponent} from './pages/daylis/daylis-details/daylis-details.component';

const routes: Routes = [
  { path: 'login',
    component: LoginComponent,
    children: [
      {
        path: 'signup',
        component: SignupComponent,
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
