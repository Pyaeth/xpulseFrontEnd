import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppRoutingModule } from './app-routing.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import { ChartsModule } from 'ng2-charts';
import { MatSliderModule } from '@angular/material/slider';
import {MatSlideToggleModule, MatSlideToggle} from '@angular/material/slide-toggle';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { PulseHeader } from '../components/pulseheader/pulseheader.component';
import { UserComponent } from '../components/user/user.component';
import { UserDetailsComponent } from '../components/userdetails/userdetails.component';
import { PageNotFoundComponent } from '../components/404pagenotfound/404.component';
import { WelcomeComponent } from '../components/welcomepage/welcome.component';
import { DashboardDoughnutChartComponent } from '../components/dashboard-doughnut-chart/dashboard-doughnut-chart.component';
import { AuthenticationService } from './services/authenticationservice/authentication.service';
import { AlertService } from './services/alertservice/alert.service';


const appRoutes: Routes = [
  { path: '', component: WelcomeComponent, data: { title: 'Xpulse:: Welcome' } },
  { path: 'login', component: UserComponent, data: { title: 'Xpulse:: Login' } },
  { path: 'user/:id', component: UserDetailsComponent, data: { title: 'myXpulse' } },
  { path: 'user/:id',
    redirectTo: '/myXpulse',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    PulseHeader,
    AppComponent,
    UserComponent,
    UserDetailsComponent,
    PageNotFoundComponent,
    WelcomeComponent,
    DashboardDoughnutChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    ChartsModule,
    NoopAnimationsModule
  ],
  providers: [
    AuthenticationService,
    AlertService
  ],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class AppModule { }
