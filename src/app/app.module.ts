import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppRoutingModule } from './app-routing.module';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import { ChartsModule } from 'ng2-charts';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { PulseHeader } from '../components/pulseheader/pulseheader.component';
import { UserComponent } from '../components/user/user.component';
import { UserDetailsComponent } from '../components/userdetails/userdetails.component';
import { PageNotFoundComponent } from '../components/404pagenotfound/404.component';
import { WelcomeComponent } from '../components/welcomepage/welcome.component';
import { DashboardDoughnutChartComponent } from '../components/dashboard-doughnut-chart/dashboard-doughnut-chart.component';


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
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class AppModule { }
