import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/services/transactionservice/transaction.service';
import { Router } from '@angular/router';
import { User } from 'src/app/entity/user';
import { first } from 'rxjs/internal/operators/first';

@Component({
  selector: 'dashboard-doughnut-chart',
  templateUrl: './dashboard-doughnut-chart.component.html',
  styleUrls: ['./dashboard-doughnut-chart.component.less']
})
export class DashboardDoughnutChartComponent implements OnInit {
  user: User;
  public doughnutChartLabels = ['Food/Restaurant', 'Shopping', 'Online Payments', 'Bills', 'Bank Credits', 'Insurance Policies'];
  public doughnutChartData = [120, 150, 180, 90, 50, 200];
  public doughnutChartType = 'doughnut';
  public doughnutChartOptions = {
    legend: {
      position: 'right',
      labels: {
        fontSize: 18
      }
    },
    elements: {
      arc: {
        borderColor: '#000',
        borderWidth: 0.5
      }
    }
  };

  constructor(private router: Router,
    private transactionService: TransactionService) {
  }

  ngOnInit() {
    if (sessionStorage.getItem('user') != null) {
      this.router.navigateByUrl('home');
    }
    this.user = JSON.parse(sessionStorage.getItem('user'));
  }

}
