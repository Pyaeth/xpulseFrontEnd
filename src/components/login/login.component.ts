import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm, Validators } from '@angular/forms';
import { User } from '../../app/entity/user';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../app/services/authenticationservice/authentication.service';
import { AlertService } from '../../app/services/alertservice/alert.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  providers: [AuthenticationService, AlertService],
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loading = false;
  isCreateNewUserRequested = false;
  isInvalidLogin = false;
  isInputFilled = false;
  userAlreadyExists = false;
  submitted = false;
  returnUrl: string;
  error = '';
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
    private alertService: AlertService) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/home']);
    }
  }

  ngOnInit() {

    this.isCreateNewUserRequested = this.route.snapshot.data['isCreateNewUserRequested'];
    this.userForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // reset login status
    this.authenticationService.setLogout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
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
          console.log(data);
          sessionStorage.setItem('user', data.toString());
          this.router.navigate(['/home'], {
            queryParams: {
              'selectedTimeframe': 'month',
              'isAmountsToggled': false
            }
          });
        },
        error => {
          this.isInvalidLogin = true;
        });
  }

  createNewUser() {
    if (this.isInputFilled) {
      this.authenticationService.createUser(this.f.username.value, this.f.password.value)
        .pipe(first())
        .subscribe(
          data => {
            console.log(data);
            sessionStorage.setItem("user", data.toString());
            this.router.navigateByUrl('home');
          },
          error => {
            this.userAlreadyExists = true;
          });
    } else {
      this.isCreateNewUserRequested = true;
      this.isInputFilled = true;
    }
  }

  alreadyUser() {
    this.isCreateNewUserRequested = false;
    this.isInputFilled = false;
  }

  get f() { return this.userForm.controls; }


}