import {Component, OnInit, ViewChild} from '@angular/core';
import { User } from 'src/app/entity/user';
import { AuthenticationService } from 'src/app/services/authenticationservice/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavBar implements OnInit{
  user: User;

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('user'));
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/home']);
    }
  }

  setLogout() {
    this.authenticationService.setLogout();
    this.router.navigate(['/login']);
  }
}