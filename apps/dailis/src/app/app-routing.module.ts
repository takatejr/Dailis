import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './core/error/error.component';
import { LoginComponent } from './pages/login/login.component';
import { SingupComponent } from './pages/singup/singup.component';
import { DaylisComponent } from './pages/daylis/daylis.component';
import { DaylisDetailsComponent } from './pages/daylis/daylis-details/daylis-details.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component'
import { BetstatComponent } from './pages/betstat/betstat.component';
import { BetstatDetailsComponent } from './pages/betstat/betstat-details/betstat-details.component';
import { SignupModule } from './pages/singup/signup.module';


const routes: Routes = [
  { path: 'login', component: LoginComponent, },
  { path: 'signup', component: SingupComponent, },
  { path: 'daylis', component: DaylisComponent },
  { path: '', component: DashboardComponent },
  { path: 'cookbook', loadChildren: () => import('./pages/cookbook/cookbook.module').then(m => m.CookbookModule) },
  { path: 'recipes', loadChildren: () => import('./pages/recipes/recipes.module').then(m => m.RecipesModule) },
  { path: 'register', loadChildren: () => import('./pages/singup/signup.module').then(m => m.SignupModule) },
  {
    path: 'betstat', component: BetstatComponent,
    children: [
      {
        path: ':id',
        component: BetstatDetailsComponent
      }
    ]
  },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
