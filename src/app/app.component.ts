import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './services/dataservice/data.service';
import { User } from './entity/user';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'XpulseX-pulse: Tracking the pulse of your transactions.';
  private username: String;
  private password: String;
  private user: Observable<User>;
  userForm;
  private router: Router;
  private serverUrl = 'http://localhost:4200';
  http: Http;

  constructor(
    private dataService: DataService,
    private formBuilder: FormBuilder
    ) {
      this.userForm = this.formBuilder.group({
        username: '',
        password: ''
      });
  }
  ngOnInit() {

  }
  onClickSubmit(formData: User) {
    console.log('username is:' + formData.username);
    let headers = new Headers({'Content-Type': 'application/json'});
    this.http.post(this.serverUrl,{userName: 'userForm.username', password: 'userForm.password'},
    {headers:headers}).subscribe(
      (data) => {
        console.log(data);
      }
    )
  }

  onFacebookLogin() {
    $.get("/user", function(data) {
      $("#user").html(data.userAuthentication.details.name);
      $(".unauthenticated").hide()
      $(".authenticated").show()
  });
  }

  isHomeRoute() {
    return this.router.url === '/';
  }
}
