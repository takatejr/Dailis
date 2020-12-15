import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './core/error/error.component';
import { LoginComponent } from './pages/login/login.component';
import { SingupComponent } from './pages/login/singup/singup.component';
import { DaylisComponent } from './pages/daylis/daylis.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { CookbookComponent } from './pages/cookbook/cookbook.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component'
import { BetstatDetailsComponent } from './pages/betstat-details/betstat-details.component';


const routes: Routes = [
  { path: 'login',
    loadChildren: () => import('./pages/login/login.component').then(c => c.LoginComponent),
    children: [
      {
        path: 'signup',
        loadChildren: () => import('./pages/login/singup/singup.component').then(c => c.SingupComponent)
      }
    ],
  },
  { path: 'daylis', loadChildren: () => import('./pages/daylis/daylis.component').then(c => c.DaylisComponent)},
  { path: '', component: DashboardComponent},
  { path: 'recipes', loadChildren: () => import('./pages/recipes/recipes.component').then(c => c.RecipesComponent)},
  { path: 'cookbook', loadChildren: () => import('./pages/cookbook/cookbook.component').then(c => c.CookbookComponent)},
  { path: 'betstat/:id', loadChildren: () => import('./pages/betstat/betstat.component').then(c => c.BetstatComponent)},
  { path: '**', loadChildren: () => import('./core/error/error.component').then(c => c.ErrorComponent)},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
