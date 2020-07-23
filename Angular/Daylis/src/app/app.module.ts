import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoreModule} from "./core/core.module";
import { LoginComponent } from './components/login/login.component';
import { SingupComponent } from './components/login/singup/singup.component';
import { DaylisComponent } from './components/daylis/daylis.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { CookbookComponent } from './components/cookbook/cookbook.component';
import { DaylisDetailsComponent } from './components/daylis/daylis-details/daylis-details.component';
import { EditDetailsComponent } from './components/daylis/daylis-details/edit-details/edit-details.component';
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
