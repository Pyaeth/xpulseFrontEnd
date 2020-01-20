import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './entity/user';
import { Router } from '@angular/router';
import { Http} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'XpulseX-pulse: Tracking the pulse of your transactions.';
  private username: String;
  private password: String;
  private user: Observable<User>;
  userForm;
  private router: Router;
  private serverUrl = 'http://localhost:4200';
  http: Http;

  isHomeRoute() {
    return this.router.url === '/';
  }
}
