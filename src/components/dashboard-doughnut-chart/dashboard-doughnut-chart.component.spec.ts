import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDoughnutChartComponent } from './dashboard-doughnut-chart.component';

describe('DashboardDoughnutChartComponent', () => {
  let component: DashboardDoughnutChartComponent;
  let fixture: ComponentFixture<DashboardDoughnutChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardDoughnutChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDoughnutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
