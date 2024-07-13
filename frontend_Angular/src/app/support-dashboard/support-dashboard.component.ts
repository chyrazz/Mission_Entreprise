import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import Chartist from 'chartist';

@Component({
  selector: 'app-support-dashboard',
  templateUrl: './support-dashboard.component.html',
  styleUrls: ['./support-dashboard.component.scss']
})
export class SupportDashboardComponent implements AfterViewInit, OnDestroy {

  selectedCategory: string = '';
  selectedDateRange: string = '';
  RequestStatus: string = '';
  UserStatus: string = '';
  websiteViewsChart3: any;


  applyFilters() {
  // Logic to filter data based on selectedCategory and selectedDateRange
}

  ngAfterViewInit(): void {
    this.renderChart();
  }


  renderChart(): void {
    const dataPieChart: any = {
      labels: ['Information', 'Claim', 'Incident'],
      series: [20, 30, 50] // Example data, adjust as needed
    };
  
    const optionsPieChart: any = {
      width: '100%', // Adjust as needed
      height: '200px', // Smaller height
      chartPadding: 10, // Adjust padding
      labelInterpolationFnc: function(value) {
        return value;
      }
    };
  
    const pieChart = new Chartist.Pie('#websiteViewsChart3', dataPieChart, optionsPieChart);
    this.startAnimationForPieChart(pieChart);
  }
  
  startAnimationForPieChart(chart) {
    chart.on('draw', function(data) {
      if (data.type === 'slice') {
        const angle = data.endAngle - data.startAngle;
        const percent = parseFloat((angle / (2 * Math.PI) * 100).toFixed(2));
        data.element.attr({
          'data-tooltip': percent + '%'
        });
      }
    });
  }

  ngOnDestroy(): void {
    if (this.websiteViewsChart3) {
      this.websiteViewsChart3.detach();
    }
  }
}
