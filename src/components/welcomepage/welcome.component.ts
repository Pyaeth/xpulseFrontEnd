import {Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, NgForm, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataService } from '../../app/services/dataservice/data.service';
import { User } from '../../app/entity/user';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../../app/services/authenticationservice/authentication.service';
import { AlertService } from '../../app/services/alertservice/alert.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  providers: [ AuthenticationService, AlertService ]
})
export class WelcomeComponent implements OnInit {
  loading = false;
    submitted = false;
    returnUrl: string;
  userForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });

    title = 'XpulseX-pulse: Tracking the pulse of your transactions.';
    private username: String;
    private password: String;
    private user: User;

    constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService,
      private alertService: AlertService) {}

    // constructor(
    //   private dataService: DataService,
    //   private formBuilder: FormBuilder,
    //   private service: AuthenticationService
    //   ) {
    //     this.userForm = this.formBuilder.group({
    //       username: '',
    //       password: ''
    //     });
    // }

    ngOnInit() {
      this.userForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
      });

      // reset login status
      this.authenticationService.setLogout();

      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/user';
  }

    signin(form: NgForm) {
      console.log(form);
    }
    onClickSubmit() {
      this.submitted = true;

      if (this.userForm.invalid) {
        return;
    }

    this.loading = true;
        this.authenticationService.getValidLogin(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
  
    onFacebookLogin() {
      $.get("/user", function(data) {
        $("#user").html(data.userAuthentication.details.name);
        $(".unauthenticated").hide()
        $(".authenticated").show()
    });
    }

    get f() { return this.userForm.controls; }


}