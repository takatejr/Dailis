import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoreModule} from "./core/core.module";
import { LoginComponent } from './pages/login/login.component';
import { SingupComponent } from './pages/login/singup/singup.component';
import { DaylisComponent } from './pages/daylis/daylis.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { CookbookComponent } from './pages/cookbook/cookbook.component';
import { DaylisDetailsComponent } from './pages/daylis/daylis-details/daylis-details.component';
import { EditDetailsComponent } from './pages/daylis/daylis-details/edit-details/edit-details.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SingupComponent,
    DaylisComponent,
    RecipesComponent,
    CookbookComponent,
    DaylisDetailsComponent,
    EditDetailsComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
