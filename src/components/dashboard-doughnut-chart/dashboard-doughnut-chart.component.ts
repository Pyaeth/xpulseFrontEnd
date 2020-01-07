import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard-doughnut-chart',
  templateUrl: './dashboard-doughnut-chart.component.html',
  styleUrls: ['./dashboard-doughnut-chart.component.less']
})
export class DashboardDoughnutChartComponent implements OnInit {
  public doughnutChartLabels = ['Food/Restaurant', 'Shopping', 'Online Payments', 'Bills', 'Bank Credits', 'Insurance Policies'];
  public doughnutChartData = [120, 150, 180, 90, 50];
  public doughnutChartType = 'doughnut';
  constructor() { }

  ngOnInit() {
  }

}
