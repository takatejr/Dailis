import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LoginComponent } from './pages/login/login.component';
import { SingupComponent } from './pages/singup/singup.component';
import { DaylisComponent } from './pages/daylis/daylis.component';
import { DaylisDetailsComponent } from './pages/daylis/daylis-details/daylis-details.component';
import { EditDetailsComponent } from './pages/daylis/daylis-details/edit-details/edit-details.component';
import { FormsModule,  ReactiveFormsModule, FormControl } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BetstatComponent } from './pages/betstat/betstat.component';
import { BetstatDetailsComponent } from './pages/betstat/betstat-details/betstat-details.component';
import { HttpErrorInterceptor } from './interceptors/error.interceptor';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NxModule } from '@nrwl/angular';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SingupComponent,
    DaylisComponent,
    DaylisDetailsComponent,
    EditDetailsComponent,
    DashboardComponent,
    BetstatComponent,
    BetstatDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSidenavModule,
    NxModule.forRoot(),
    // ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
