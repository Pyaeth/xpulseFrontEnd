import {Component, OnInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataService } from '../../app/services/dataservice/data.service';
import { User } from '../../app/entity/user';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../app/config/config.service';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  providers: [ ConfigService ]
})
export class WelcomeComponent implements OnInit {
  userForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });

    title = 'XpulseX-pulse: Tracking the pulse of your transactions.';
    private username: String;
    private password: String;
    private user: User;
    private router: Router;
    private configService: ConfigService;
  
    constructor(
      private dataService: DataService,
      private formBuilder: FormBuilder,
      private service: ConfigService
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
      this.configService.getValidLogin(formData.username, formData.password)
      .subscribe(
        (data: User) => this.user = data
      );
    }
  
    onFacebookLogin() {
      $.get("/user", function(data) {
        $("#user").html(data.userAuthentication.details.name);
        $(".unauthenticated").hide()
        $(".authenticated").show()
    });
    }

}