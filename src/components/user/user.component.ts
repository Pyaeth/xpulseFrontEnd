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
  unitsReported: string;
  times: string[] = ['week', 'month', 'year'];
  selectedTimeframe: string;
  isAmountsToggled: boolean;
  
  constructor() {
    this.timePeriod = 'month';
    this.profit = true;
    if (this.balance < 0) {
      document.getElementById("balance").style.backgroundColor = '#D9363F';
    }
    this.selectedTimeframe = 'week';
    this.isAmountsToggled = false;
  }

  selectTimeframe(event){
    console.log(event);
    alert(event);
  }
}