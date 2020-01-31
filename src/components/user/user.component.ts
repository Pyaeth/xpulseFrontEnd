import {Component, OnInit} from '@angular/core';
import { User } from 'src/app/entity/user';
import { Router } from '@angular/router';
import { Statistic } from 'src/app/entity/statistic';
import { TransactionService } from 'src/app/services/transactionservice/transaction.service';
import { first } from 'rxjs/internal/operators/first';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  providers: [TransactionService],
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
  statistic: Statistic;
  
  constructor( private router: Router,
  private transactionService: TransactionService) {
    this.timePeriod = 'month';
    this.profit = true;
    if (this.balance < 0) {
      document.getElementById('balance').style.backgroundColor = '#D9363F';
    }
    this.selectedTimeframe = 'week';
    this.isAmountsToggled = false;
  }

  ngOnInit() {
    if (sessionStorage.getItem('user') == null) {
      this.router.navigateByUrl('/');
    }
    
    this.user = JSON.parse(sessionStorage.getItem('user'));

    this.transactionService.getStatistics(this.user.id, this.timePeriod)
      .pipe(first())
      .subscribe(
        data => {
          this.statistic = JSON.parse(data);
          console.log(this.statistic);
          //this.router.navigateByUrl('home');
        },
        error => {
           
        });
  }
}