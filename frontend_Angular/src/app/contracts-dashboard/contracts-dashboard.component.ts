import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { DashboardService } from 'app/services/DashboardService';
import Chartist from 'chartist';

@Component({
  selector: 'app-contracts-dashboard',
  templateUrl: './contracts-dashboard.component.html',
  styleUrls: ['./contracts-dashboard.component.scss']
})
export class ContractsDashboardComponent implements AfterViewInit, OnDestroy, OnInit {
  selectedCategory: string = '';
  selectedDateRange: string = '';
  RequestStatus: string = '';
  UserStatus: string = '';
  dailySalesChart2: any;
  completedTasksChart2: any;
  websiteViewsChart2: any;
  totalContracts: number = 0;
  terminatedContracts: number = 0;
  pendingContracts: number = 0;
  totalOpportunities: number = 0;
  wonOpportunities: number = 0;
  rejectedOpportunities: number = 0;
  pendingOpportunities: number = 0;
  opportunitiesCount: number = 0;

  constructor(private service: DashboardService) { }

  ngOnInit(): void {
    this.loadData();
  }

  private loadData(): void {
    this.service.getTotalContracts().subscribe(res => {
      this.totalContracts = res;
    });

    this.service.getTerminatedContracts().subscribe(res => {
      this.terminatedContracts = res;
    });

    this.service.getPendingContracts().subscribe(res => {
      this.pendingContracts = res;
    });

    this.service.getTotalOpportunities().subscribe(
      data => this.totalOpportunities = data,
      error => console.error('There was an error!', error)
    );

    this.service.getWonOpportunities().subscribe(
      data => this.wonOpportunities = data,
      error => console.error('There was an error!', error)
    );

    this.service.getRejectedOpportunities().subscribe(
      data => this.rejectedOpportunities = data,
      error => console.error('There was an error!', error)
    );

    this.service.getPendingOpportunities().subscribe(
      data => this.pendingOpportunities = data,
      error => console.error('There was an error!', error)
    );

    this.service.getOpportunitiesByCommercial().subscribe((count) => {
      this.opportunitiesCount = count;
    });
  }

  ngAfterViewInit(): void {
    this.renderChart();
  }

  renderChart(): void {
    this.renderDailySalesChart();
    this.renderCompletedTasksChart();
    this.renderWebsiteViewsChart();
  }

  renderDailySalesChart(): void {
    const dataDailySalesChart: any = {
      labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      series: [
        [12, 17, 7, 17, 23, 18, 38]
      ]
    };

    const optionsDailySalesChart: any = {
      lineSmooth: Chartist.Interpolation.cardinal({
        tension: 0
      }),
      low: 0,
      high: 50,
      chartPadding: { top: 0, right: 0, bottom: 0, left: 0 }
    };

    this.dailySalesChart2 = new Chartist.Line('#dailySalesChart2', dataDailySalesChart, optionsDailySalesChart);
    this.startAnimationForLineChart(this.dailySalesChart2);
  }

  renderCompletedTasksChart(): void {
    const dataCompletedTasksChart: any = {
      labels: ['12p', '3p', '6p', '9p', '12p', '3a', '6a', '9a'],
      series: [
        [230, 750, 450, 300, 280, 240, 200, 190]
      ]
    };

    const optionsCompletedTasksChart: any = {
      lineSmooth: Chartist.Interpolation.cardinal({
        tension: 0
      }),
      low: 0,
      high: 1000,
      chartPadding: { top: 0, right: 0, bottom: 0, left: 0 }
    };

    this.completedTasksChart2 = new Chartist.Line('#completedTasksChart2', dataCompletedTasksChart, optionsCompletedTasksChart);
    this.startAnimationForLineChart(this.completedTasksChart2);
  }

  renderWebsiteViewsChart(): void {
    const dataWebsiteViewsChart: any = {
      labels: ['Opportunities'],
      series: [
        [this.opportunitiesCount]
      ]
    };

    const optionsWebsiteViewsChart: any = {
      axisX: {
        showGrid: false
      },
      axisY: {
        offset: 40 // Adjust as needed for label spacing
      },
      low: 0,
      high: 15,
      chartPadding: { top: 0, right: 5, bottom: 0, left: 0 }
    };

    const responsiveOptions: any[] = [
      ['screen and (max-width: 640px)', {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function(value) {
            return value[0];
          }
        }
      }]
    ];

    this.websiteViewsChart2 = new Chartist.Bar('#websiteViewsChart2', dataWebsiteViewsChart, optionsWebsiteViewsChart, responsiveOptions);
    this.startAnimationForBarChart(this.websiteViewsChart2);
  }

  startAnimationForLineChart(chart) {
    let seq = 0;
    const delays = 80;
    const durations = 500;

    chart.on('draw', function(data) {
      if (data.type === 'line' || data.type === 'area') {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === 'point') {
        seq++;
        data.element.animate({
          opacity: {
            begin: seq * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: 'ease'
          }
        });
      }
    });
  }

  startAnimationForBarChart(chart) {
    let seq = 0;
    const delays = 80;
    const durations = 500;

    chart.on('draw', function(data) {
      if (data.type === 'bar') {
        seq++;
        data.element.animate({
          opacity: {
            begin: seq * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: 'ease'
          }
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.detachCharts();
  }

  detachCharts(): void {
    if (this.dailySalesChart2) {
      this.dailySalesChart2.detach();
    }
    if (this.completedTasksChart2) {
      this.completedTasksChart2.detach();
    }
    if (this.websiteViewsChart2) {
      this.websiteViewsChart2.detach();
    }
  }

  applyFilters(){

  }
}
