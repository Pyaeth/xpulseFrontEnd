import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { User } from 'src/app/entity/user';
import { UserserviceService } from 'src/app/services/userservice/userservice.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { PasswordValidation } from './passwordvalidation.component';

@Component({
  selector: 'myxpulse',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss'],
  providers: [UserserviceService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetailsComponent implements OnInit {
  user: User;
  firstNameForm = new FormGroup({
    oldFirstName: new FormControl(),
    newFirstName: new FormControl()
  });

  lastNameForm = new FormGroup({
    oldLastName: new FormControl(),
    newLastName: new FormControl()
  });

  UserNameForm = new FormGroup({
    oldUserName: new FormControl(),
    newUserName: new FormControl()
  });

  PasswordForm = new FormGroup({
    oldPassword: new FormControl(),
    newPassword: new FormControl(),
    newPasswordConfirm: new FormControl()
  });

  ngOnInit() {
    if (sessionStorage.getItem('user') == null) {
      this.router.navigateByUrl('/');
    }
    this.user = JSON.parse(sessionStorage.getItem('user'));
    this.firstNameForm = this.formBuilder.group({
      oldFirstName: this.user.firstname,
      newFirstName: ['', Validators.required]
    });
    this.lastNameForm = this.formBuilder.group({
      oldLastName: this.user.lastname,
      newLastName: ['', Validators.required]
    });
    this.UserNameForm = this.formBuilder.group({
      oldUserName: this.user.username,
      newUserName: ['', Validators.required],
      passwdConfirm: ['', Validators.required]
    });
    this.PasswordForm = this.formBuilder.group({
      oldPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      newPasswordConfirm: ['', Validators.required]
    }, {
      validator: PasswordValidation.MatchPassword
    });
  }

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserserviceService) {
  }

  updateFirstName() {
    this.userService.updateUserFirstName(this.user.username, this.fn.newFirstName.value)
      .pipe(first())
      .subscribe(
        data => {
          sessionStorage.setItem('user', data);
          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.onSameUrlNavigation = 'reload';
          this.router.navigate(['/myXpulse']);
        },
        error => {
        });
  }

  updateLastName() {
    this.userService.updateUserLastName(this.user.username, this.ln.newLastName.value)
      .pipe(first())
      .subscribe(
        data => {
          sessionStorage.setItem('user', data);
          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.onSameUrlNavigation = 'reload';
          this.router.navigate(['/myXpulse']);
        },
        error => {
        });
  }

  changeUsername() {
    this.userService.changeUsername(this.user.id, this.un.newUserName.value, this.un.passwdConfirm.value)
      .pipe(first())
      .subscribe(
        data => {
          sessionStorage.setItem('user', data);
          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.onSameUrlNavigation = 'reload';
          this.router.navigate(['/myXpulse']);
        },
        error => {
        });
  }

  changePassword() {
    this.userService.changePassword(this.user.username, this.pa.oldPassword.value, this.pa.newPassword.value)
      .pipe(first())
      .subscribe(
        data => {
          sessionStorage.setItem('user', data);
          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.onSameUrlNavigation = 'reload';
          this.router.navigate(['/myXpulse']);
        },
        error => {
        });
  }

  get fn() { return this.firstNameForm.controls; }
  get ln() { return this.lastNameForm.controls; }
  get un() { return this.UserNameForm.controls; }
  get pa() { return this.PasswordForm.controls; }

  matchNewPassword() {
    if (this.PasswordForm.controls.newPassword == this.PasswordForm.controls.newPasswordConfirm) {
      return {
        matchOther: true
      }
    }
    return null;
  }
}