import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Tache } from 'app/model/Tache';
import { DashboardService } from 'app/services/DashboardService';
import Chartist from 'chartist';

@Component({
  selector: 'app-support-dashboard',
  templateUrl: './support-dashboard.component.html',
  styleUrls: ['./support-dashboard.component.scss']
})
export class SupportDashboardComponent implements AfterViewInit, OnDestroy, OnInit {

  selectedCategory: string = '';
  selectedDateRange: string = '';
  RequestStatus: string = '';
  UserStatus: string = '';
  websiteViewsChart8: Chartist.IChartistPieChart;
  totalRequests: number = 0;
  progressRequests: number = 0;
  escalatedRequests: number = 0;
  resolvedRequests: number = 0;
  incidentCount: number = 0;
  informationCount: number = 0;
  claimCount: number = 0;
  EditStatus: boolean = true;
  id: number = 0;
  newTaskDescription: string = '';
  taskSource: Tache[] = [];

  constructor(private service: DashboardService) {}

  ngOnInit(): void {
    this.loadData();
    this.loadTaskData();
  }

  loadTaskData(): void {
    this.service.getAllTasks().subscribe(res => {
      this.taskSource = res;
    });
  }

  loadData(): void {
    this.service.getTotalRequests().subscribe(res => {
      this.totalRequests = res;
      this.checkAndRenderChart();
    });

    this.service.getProgressRequests().subscribe(res => {
      this.progressRequests = res;
      this.checkAndRenderChart();
    });

    this.service.getEscalatedRequests().subscribe(res => {
      this.escalatedRequests = res;
      this.checkAndRenderChart();
    });

    this.service.getResolvedRequests().subscribe(res => {
      this.resolvedRequests = res;
      this.checkAndRenderChart();
    });

    this.service.getRequestsDistribution('Incident').subscribe(count => {
      this.incidentCount = count;
      this.checkAndRenderChart();
    });

    this.service.getRequestsDistribution('Information').subscribe(count => {
      this.informationCount = count;
      this.checkAndRenderChart();
    });

    this.service.getRequestsDistribution('Claim').subscribe(count => {
      this.claimCount = count;
      this.checkAndRenderChart();
    });
  }

  allDataLoaded(): boolean {
    return (
      this.totalRequests !== 0 &&
      this.progressRequests !== 0 &&
      this.escalatedRequests !== 0 &&
      this.resolvedRequests !== 0 &&
      this.incidentCount !== 0 &&
      this.informationCount !== 0 &&
      this.claimCount !== 0
    );
  }

  ngAfterViewInit(): void {
    if (this.allDataLoaded()) {
      this.renderChart();
    }
  }

  renderChart(): void {
    if (this.allDataLoaded()) {
      const dataPieChart8 = {
        labels: ['Information', 'Claim', 'Incident'],
        series: [
          this.informationCount,
          this.claimCount,
          this.incidentCount
        ]
      };
  
      console.log('Data for pie chart:', dataPieChart8); // Check data before chart creation
  
      const optionsPieChart8 = {
        width: '100%',
        height: '200px',
        chartPadding: 10,
        labelInterpolationFnc: function (value) {
          return value;
        }
      };
  
      const pieChart8 = new Chartist.Pie('#websiteViewsChart8', dataPieChart8, optionsPieChart8);
      this.startAnimationForPieChart(pieChart8);
    }
  }
  

  startAnimationForPieChart(chart: Chartist.IChartistPieChart): void {
    chart.on('draw', function (data) {
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
    if (this.websiteViewsChart8) {
      this.websiteViewsChart8.detach();
    }
  }

  addTask(): void {
    const addTache = new Tache();
    if (this.newTaskDescription != null) {
      addTache.description = this.newTaskDescription;

      this.service.addTask(addTache).subscribe(res => {
        this.loadTaskData();
      });
    }
  }

  deleteTask(id: number): void {
    this.service.deleteTask(id).subscribe(res => {
      this.loadTaskData();
    });
  }

  editTask(task: Tache): void {
    this.service.editTask(task).subscribe(res => {
      this.loadTaskData();
    });
  }

  private checkAndRenderChart(): void {
    if (this.allDataLoaded()) {
      this.renderChart();
    }
  }

  applyFilters(): void {
    // Implement filtering logic if needed
  }

}
