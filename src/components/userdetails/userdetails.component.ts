import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/entity/user';
import { UserserviceService } from 'src/app/services/userservice/userservice.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'myxpulse',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss'],
  providers: [UserserviceService]
})
export class UserDetailsComponent implements OnInit {
  user: User;

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('user'));
  }

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserserviceService) {
  }
  editFirstName(newFirstname: string) {
    this.userService.updateUserFirstName(this.user.username, newFirstname)
    .pipe(first())
      .subscribe(
        data => {
          sessionStorage.setItem("user", data.toString());
          this.router.navigateByUrl('myXpulse');
        },
        error => {
        });
  }

  editLastName(newLastname: string) {
    this.userService.updateUserLastName(this.user.username, newLastname)
    .pipe(first())
      .subscribe(
        data => {
          sessionStorage.setItem("user", data.toString());
          this.router.navigateByUrl('myXpulse');
        },
        error => {
        });
  }

  changeUsername(newUsername: string) {
    this.userService.changeUsername(this.user.id, newUsername)
    .pipe(first())
      .subscribe(
        data => {
          sessionStorage.setItem("user", data.toString());
          this.router.navigateByUrl('myXpulse');
        },
        error => {
        });
  }

  changePassword(newPassword: string) {
    this.userService.changePassword(this.user.username, newPassword)
    .pipe(first())
      .subscribe(
        data => {
          sessionStorage.setItem("user", data.toString());
          this.router.navigateByUrl('myXpulse');
        },
        error => {
        });

  }
}