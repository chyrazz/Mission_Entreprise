import { Component, AfterViewInit, OnDestroy, OnInit } from '@angular/core';
import { EUserStatus } from 'app/model/EUserStatus';
import { DashboardService } from 'app/services/DashboardService';
import Chartist from 'chartist';

@Component({
  selector: 'app-clients-dashboard',
  templateUrl: './clients-dashboard.component.html',
  styleUrls: ['./clients-dashboard.component.scss']
})
export class ClientsDashboardComponent implements AfterViewInit, OnDestroy, OnInit {


  constructor(private service: DashboardService) { } 
  ngOnInit(): void {
    this.service.getTotalClients().subscribe(res=>{
      this.totalClients=res
    });

    this.service.getTotalLeads().subscribe(res=>{
      this.totalLeads=res
    });

    this.service.getLeadsByStatus("Qualified").subscribe(res=>{
      this.leadsByStatus.push(res);
      this.service.getLeadsByStatus("Disqualified").subscribe(res2=>{
        this.leadsByStatus.push(res2);
        this.service.getLeadsByStatus("En_attente").subscribe(res3=>{
          this.leadsByStatus.push(res3);

          // Render the chart after data is fully loaded!!!!!!!!!!!!!!!!!!!!!
          this.renderChart(); //X IMPORTANT X

        })
      })
    });

    
    this.service.getCauseDisqualified("unsatisfied_needs").subscribe(res=>{
      this.cause.push(res);
      this.service.getCauseDisqualified("high_pricing").subscribe(res2=>{
        this.cause.push(res2);
        this.service.getCauseDisqualified("changing_needs").subscribe(res3=>{
          this.cause.push(res3);

          // Render the chart after data is fully loaded!!!!!!!!!!!!!!!!!!!!!
          this.renderChart(); //X IMPORTANT X

        })
      })
    });

    console.log(this.cause);
  }
  ;


  selectedCategory: string = '';
  selectedDateRange: string = '';
  RequestStatus: string = '';
  UserStatus: string = '';
  websiteViewsChart: any;
  totalClients: number = 0;
  totalLeads: number = 0;
  leadsByStatus: number[] = [];
  cause : number[] = [];

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

    chart.on('draw', function (data) {
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
    chart.on('draw', function (data) {
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
    }

    const dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);
    this.startAnimationForLineChart(dailySalesChart);

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
    }

    const completedTasksChart = new Chartist.Line('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);
    this.startAnimationForLineChart(completedTasksChart);

    const datawebsiteViewsChart = {
      labels: ['Qualified', 'Disqualified', 'Pending'],
      series: 
      [this.leadsByStatus]
      
    };
    const optionswebsiteViewsChart = {
      axisX: {
        showGrid: false
      },
      low: 0,
      high: 10,
      chartPadding: { top: 0, right: 5, bottom: 0, left: 0 }
    };
    const responsiveOptions: any[] = [
      ['screen and (max-width: 640px)', {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function (value) {
            return value[0];
          }
        }
      }]
    ];
    this.websiteViewsChart = new Chartist.Bar('#websiteViewsChart', datawebsiteViewsChart, optionswebsiteViewsChart, responsiveOptions);
    this.startAnimationForBarChart(this.websiteViewsChart);

    
    const dataPieChart6: any = {
      labels: ['unsatisfied_needs','changing_needs','high_pricing'],
      series: this.cause
    };
  
    const optionsPieChart6: any = {
      width: '100%', // Adjust as needed
      height: '200px', // Smaller height
      chartPadding: 10, // Adjust padding
      labelInterpolationFnc: function(value) {
        return value;
      }
    };
  
    const pieChart = new Chartist.Pie('#websiteViewsChart6', dataPieChart6, optionsPieChart6);
  }



  ngOnDestroy(): void {
    if (this.websiteViewsChart) {
      this.websiteViewsChart.detach();
    }
  }

}
