import {Component, OnInit} from '@angular/core';
import { User } from '../../app/entity/user';
import { UserserviceService } from '../../app/services/userservice/userservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'updateUDModal',
  templateUrl: './updateUDModal.component.html',
  providers: [UserserviceService]
})
export class UpdateUDModal implements OnInit{
  user: User;

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('user'));
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserserviceService) {
  }

  
}