import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './data.service';
import { User } from './entity/user';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'XpulseX-pulse: Tracking the pulse of your transactions.';
  private username: String;
  private password: String;
  private user: User;
  userForm;
  private router: Router;

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
