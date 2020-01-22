import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../app/entity/user';
import { UserserviceService } from '../../app/services/userservice/userservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { ModalDirective } from 'angular-bootstrap-md';

@Component({
  selector: 'updateFirstName',
  templateUrl: './updateFirstName.component.html',
  styleUrls: ['./updateFirstName.component.scss'],
  providers: [UserserviceService]
})
export class UpdateFirstName implements OnInit {
  @ViewChild('frame', { static: true }) frame: ModalDirective;
  showAndHideModal() {
    this.frame.show();
    console.log("this.frame.show() was called!");

    setTimeout(() => {
      this.frame.hide();
      console.log("this.frame.hide() was called!");
    }, 3000);
  }
  user: User;
  firstNameForm = new FormGroup({
    oldFirstName: new FormControl(),
    newFirstName: new FormControl()
  });

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserserviceService) {
  }

  ngOnInit() {
    $('#firstNameModal').show();
    this.user = JSON.parse(sessionStorage.getItem('user'));
    console.log("updateFirstName on init!");
    this.firstNameForm = this.formBuilder.group({
      oldFirstName: this.user.firstname,
      newFirstName: ['', Validators.required]
    });
  }

  updateFirstName(newFirstname: string) {
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
}