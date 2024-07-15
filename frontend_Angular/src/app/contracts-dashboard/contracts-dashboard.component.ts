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
  websiteViewsChart2: any;
  totalContracts: number = 0;
  terminatedContracts: number =0;
  pendingContracts: number =0;
  totalOpportunities: number =0;
  wonOpportunities: number =0;
  rejectedOpportunities: number =0;
  pendingOpportunities: number =0;
  opportunitiesCount: number=0;

  constructor(private service: DashboardService) { }

  ngOnInit(): void {
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

  

  applyFilters() {
    // Logic to filter data based on selectedCategory and selectedDateRange
  }

  shouldDisplay(category: string): boolean {
    return this.selectedCategory === '' || this.selectedCategory === category;
  }

  startAnimationForLineChart(chart) {
    let seq: any, delays: any, durations: any;
    seq = 0;
    delays = 80;
    durations = 500;

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

    seq = 0;
  }

  startAnimationForBarChart(chart) {
    let seq2: any, delays2: any, durations2: any;

    seq2 = 0;
    delays2 = 80;
    durations2 = 500;
    chart.on('draw', function(data) {
      if (data.type === 'bar') {
        seq2++;
        data.element.animate({
          opacity: {
            begin: seq2 * delays2,
            dur: durations2,
            from: 0,
            to: 1,
            easing: 'ease'
          }
        });
      }
    });

    seq2 = 0;
  }

  ngAfterViewInit() {
    this.renderChart()
  }

  renderChart() {
    const dataDailySalesChart2: any = {
      labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      series: [
        [12, 17, 7, 17, 23, 18, 38]
      ]
    };

    const optionsDailySalesChart2: any = {
      lineSmooth: Chartist.Interpolation.cardinal({
        tension: 0
      }),
      low: 0,
      high: 50,
      chartPadding: { top: 0, right: 0, bottom: 0, left: 0 }
    }

    const dailySalesChart2 = new Chartist.Line('#dailySalesChart2', dataDailySalesChart2, optionsDailySalesChart2);
    this.startAnimationForLineChart(dailySalesChart2);

    const dataCompletedTasksChart2: any = {
      labels: ['12p', '3p', '6p', '9p', '12p', '3a', '6a', '9a'],
      series: [
        [230, 750, 450, 300, 280, 240, 200, 190]
      ]
    };

    const optionsCompletedTasksChart2: any = {
      lineSmooth: Chartist.Interpolation.cardinal({
        tension: 0
      }),
      low: 0,
      high: 1000,
      chartPadding: { top: 0, right: 0, bottom: 0, left: 0 }
    }

    const completedTasksChart2 = new Chartist.Line('#completedTasksChart2', dataCompletedTasksChart2, optionsCompletedTasksChart2);
    this.startAnimationForLineChart(completedTasksChart2);

    const datawebsiteViewsChart2 = {
      labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      series: [
        [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]
      ]
    };
    const optionswebsiteViewsChart2 = {
      axisX: {
        showGrid: false
      },
      low: 0,
      high: 1000,
      chartPadding: { top: 0, right: 5, bottom: 0, left: 0 }
    };
    const responsiveOptions2: any[] = [
      ['screen and (max-width: 640px)', {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function(value) {
            return value[0];
          }
        }
      }]
    ];
    this.websiteViewsChart2 = new Chartist.Bar('#websiteViewsChart2', datawebsiteViewsChart2, optionswebsiteViewsChart2, responsiveOptions2);
    this.startAnimationForBarChart(this.websiteViewsChart2);
  }

  ngOnDestroy(): void {
    if (this.websiteViewsChart2) {
      this.websiteViewsChart2.detach();
    }
  }
}
