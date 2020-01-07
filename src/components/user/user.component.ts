import {Component} from '@angular/core';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  total: number;
  inc: number;
  out: number;
  timePeriod: string;
  balance: number;
  profit: boolean;
  
  constructor() {
    this.timePeriod = 'month';
    this.profit = true;
    if (this.balance < 0) {
      document.getElementById("balance").style.backgroundColor = '#D9363F';
    }
  }
}