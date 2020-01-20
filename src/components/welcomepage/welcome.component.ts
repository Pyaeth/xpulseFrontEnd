import { Component, OnInit } from '@angular/core';
import { User } from '../../app/entity/user';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  title = 'XpulseX-pulse: Tracking the pulse of your transactions.';
  private username: String;
  private password: String;
  private user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router) {

    }

  ngOnInit() {
    if (sessionStorage.getItem("user") != null) {
      this.router.navigateByUrl('home');
    }
  }
}