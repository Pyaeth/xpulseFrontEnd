import {Component, OnInit} from '@angular/core';
import { User } from 'src/app/entity/user';
import { Router } from '@angular/router';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{
  user: User;
  total: number;
  inc: number;
  out: number;
  timePeriod: string;
  balance: number;
  profit: boolean;
  unitsReported: string;
  times: string[] = ['week', 'month', 'year'];
  selectedTimeframe: string;
  isAmountsToggled: boolean;
  
  constructor( private router: Router) {
    this.timePeriod = 'month';
    this.profit = true;
    if (this.balance < 0) {
      document.getElementById('balance').style.backgroundColor = '#D9363F';
    }
    this.selectedTimeframe = 'week';
    this.isAmountsToggled = false;
  }

  selectTimeframe(event){
    console.log(event);
    alert(event);
  }

  ngOnInit() {
    if (sessionStorage.getItem('user') == null) {
      this.router.navigateByUrl('/');
    }
    this.user = JSON.parse(sessionStorage.getItem('user'));
    console.log(this.user);
  }
}