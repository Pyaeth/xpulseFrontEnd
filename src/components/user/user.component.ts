import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/entity/user';
import { Router, ActivatedRoute } from '@angular/router';
import { Statistic } from 'src/app/entity/statistic';
import { TransactionService } from 'src/app/services/transactionservice/transaction.service';
import { first } from 'rxjs/internal/operators/first';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

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
  currencyIf: string;
  balancecolor:string;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private transactionService: TransactionService) {
    this.timePeriod = 'month';
    this.profit = true;
    if (this.balance < 0) {
      this.balancecolor = '#D9363F';
    } else {
      this.balancecolor = '#42ad21';
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
    if (this.isAmountsToggled) {
      this.currencyIf = this.currency;
    } else {
      this.currencyIf = '';
    }

    this.getStatistics();
  }

  getStatistics() {
    this.transactionService.getStatistics(this.user.id, this.selectedTimeframe)
      .pipe(first())
      .subscribe(
        data => {
          this.statistic = JSON.parse(data);
          this.statistic.comparedToLast = Math.round((this.statistic.comparedToLast + Number.EPSILON) * 100) / 100;
          this.statistic.incoming = Math.round((this.statistic.incoming + Number.EPSILON) * 100) / 100;
          this.statistic.outgoing = Math.round((this.statistic.outgoing + Number.EPSILON) * 100) / 100;
          this.statistic.balance = Math.round((this.statistic.balance + Number.EPSILON) * 100) / 100;
          
          console.log(this.statistic);
          this.total = this.statistic.noOfTransactions;
          this.inc = this.isAmountsToggled ? this.statistic.incoming : this.statistic.noIncoming;
          this.out = this.isAmountsToggled ? this.statistic.outgoing : this.statistic.noOutgoing;
          this.balance = this.statistic.balance;
          this.comparedToLast = this.statistic.comparedToLast;
          this.profit = this.statistic.comparedToLast >= 0 ? true : false;
        },
        error => {

        });
  }

  changeTimeFrame() {
    console.log('changed timeframe reference:');
    console.log(this.selectedTimeframe);
    this.getStatistics();
  }

  changeOptions(slider: MatSlideToggleChange) {
    if (slider.checked) {
      this.isAmountsToggled = true;
      this.inc = this.statistic.incoming;
      this.out = this.statistic.outgoing;
      this.currencyIf = this.currency;
    }
    else {
      this.isAmountsToggled = false;
      this.inc = this.statistic.noIncoming;
      this.out = this.statistic.noOutgoing;
      this.currencyIf = '';
    }

  }
  changeColor(isTrue:boolean) {
    if (isTrue) {
      if (this.balancecolor == '#D9363F') //dark red
        this.balancecolor = '#db676d'; //light red
      else if (this.balancecolor == '#42ad21') //dark green
        this.balancecolor = '#71b85c'; //light green
    } else {
      if (this.balancecolor == '#db676d') //light red
        this.balancecolor = '#D9363F'; //dark red
      else if (this.balancecolor == '#71b85c') //light green
        this.balancecolor = '#42ad21'; //dark green
    }
  }
}