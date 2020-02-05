import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/entity/user';
import { Router, ActivatedRoute } from '@angular/router';
import { Statistic } from 'src/app/entity/statistic';
import { TransactionService } from 'src/app/services/transactionservice/transaction.service';
import { first } from 'rxjs/internal/operators/first';
import { MatSlideToggleModule, MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  providers: [TransactionService],
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: User;
  total: number;
  inc: number;
  out: number;
  timePeriod: string;
  balance: number;
  comparedToLast: number;
  profit: boolean;
  unitsReported: string;
  times: string[] = ['week', 'month', 'year'];
  selectedTimeframe: string;
  isAmountsToggled: boolean;
  statistic: Statistic;
  currency: string;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private transactionService: TransactionService) {
    this.timePeriod = 'month';
    this.profit = true;
    if (this.balance < 0) {
      document.getElementById('balance').style.backgroundColor = '#D9363F';
    }
    this.selectedTimeframe = 'month';
    this.isAmountsToggled = false;
  }

  ngOnInit() {
    console.log("ngOnInit of usercomponent");
    if (sessionStorage.getItem('user') == null) {
      this.router.navigateByUrl('/');
    }

    this.route.queryParams.subscribe(
      params => {
        console.log(params);
        this.selectedTimeframe = params['selectedTimeframe'] == undefined ? 'month' : params['selectedTimeframe'];
        console.log(this.selectedTimeframe);
        this.isAmountsToggled = params['isAmountsToggled'];
      }
    );

    this.user = JSON.parse(sessionStorage.getItem('user'));

    this.currency = 'lei';

    this.transactionService.getStatistics(this.user.id, this.selectedTimeframe)
      .pipe(first())
      .subscribe(
        data => {
          this.statistic = JSON.parse(data);
          this.total = this.statistic.noOfTransactions;
          this.inc = this.isAmountsToggled ? this.statistic.incoming : this.statistic.noIncoming;
          this.out = this.isAmountsToggled ? this.statistic.outgoing : this.statistic.noOutgoing;
          this.balance = this.statistic.balance;
          this.comparedToLast = this.statistic.comparedToLast;
          this.profit = this.balance >= 0 ? true : false;
        },
        error => {

        });
  }

  changeTimeFrame() {
    console.log('changed timeframe reference:');
    console.log(this.selectedTimeframe);
    this.transactionService.getStatistics(this.user.id, this.selectedTimeframe)
      .pipe(first())
      .subscribe(
        data => {
          this.statistic = JSON.parse(data);
          this.total = this.statistic.noOfTransactions;
          this.inc = this.isAmountsToggled ? this.statistic.incoming : this.statistic.noIncoming;
          this.out = this.isAmountsToggled ? this.statistic.outgoing : this.statistic.noOutgoing;
          this.balance = this.statistic.balance;
          this.comparedToLast = this.statistic.comparedToLast;
          this.profit = this.balance >= 0 ? true : false;
        },
        error => {

        });
  }

  changeOptions(slider: MatSlideToggleChange) {
    if (slider.checked) {
      this.isAmountsToggled = true;
      this.inc = this.statistic.incoming;
      this.out = this.statistic.outgoing;
    }
    else {
      this.isAmountsToggled = false;
      this.inc = this.statistic.noIncoming;
      this.out = this.statistic.noOutgoing;
    }

  }
}