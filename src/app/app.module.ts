import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import { ChartsModule } from 'ng2-charts';
import { MatSliderModule } from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { PulseHeader } from '../components/pulseheader/pulseheader.component';
import { NavBar } from '../components/navbar/navbar.component';
import { UserComponent } from '../components/user/user.component';
import { UserDetailsComponent } from '../components/userdetails/userdetails.component';
import { PageNotFoundComponent } from '../components/404pagenotfound/404.component';
import { WelcomeComponent } from '../components/welcomepage/welcome.component';
import { LoginComponent } from '../components/login/login.component';
import { DashboardDoughnutChartComponent } from '../components/dashboard-doughnut-chart/dashboard-doughnut-chart.component';

import { AuthenticationService } from './services/authenticationservice/authentication.service';
import { AlertService } from './services/alertservice/alert.service';
import { ImportCSVComponent } from 'src/components/importcsv/importcsv.component';
import { FileUploadComponent } from 'src/components/fileupload/fileupload.component';
import { AppComponent } from './app.component';
import { UserService } from './services/userservice/user.service';
import { TransactionService } from './services/transactionservice/transaction.service';


const appRoutes: Routes = [
  { path: '', component: WelcomeComponent, data: { title: 'Xpulse:: Welcome' } },
  { path: 'login', component: LoginComponent, data: { title: 'Xpulse:: Login' } },
  { path: 'register', component: LoginComponent, data: { title: 'Xpulse:: Register', isCreateNewUserRequested: true} },
  { path: 'myXpulse', component: UserDetailsComponent},
  { path: 'importcsv', component: ImportCSVComponent},
  { path: 'myXpulse',
    redirectTo: 'myXpulse',
    pathMatch: 'full'
  },
  { path: 'home', component: UserComponent, data: { title: 'Xpulse' } },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    PulseHeader,
    NavBar,
    AppComponent,
    UserComponent,
    UserDetailsComponent,
    PageNotFoundComponent,
    WelcomeComponent,
    DashboardDoughnutChartComponent,
    LoginComponent,
    ImportCSVComponent,
    FileUploadComponent
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
      { onSameUrlNavigation: 'reload',
      useHash: false } // <-- debugging purposes only
    ),
    ChartsModule,
    NoopAnimationsModule
  ],
  providers: [
    AuthenticationService,
    AlertService,
    UserService,
    TransactionService
  ],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class AppModule { }
