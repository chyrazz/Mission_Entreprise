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
taskSource: any;
Delete(id) {
  this.service.deleteTask(id).subscribe(res => {
    this.loadTaskData();
  });
}

Edit(item) {
  let addTache = new Tache()
      addTache=item;

      console.log(addTache);
      this.service.addTask(addTache).subscribe(res => {
        this.loadTaskData()
      })
}


  selectedCategory: string = '';
  selectedDateRange: string = '';
  RequestStatus: string = '';
  UserStatus: string = '';
  websiteViewsChart3: any;
  totalRequests: number = 0;
  progressRequests: number = 0;
  escalatedRequests: number = 0;
  resolvedRequests: number = 0; 
  incidentCount: number = 0;
  informationCount: number = 0;
  claimCount: number = 0;
  EditStatus: boolean=true;
  id: number =0;
  newTaskDescription: string = '';


  constructor(private service: DashboardService) { } 

  ngOnInit(): void {
    this.loadData();
    this.loadTaskData();

    console.log(this.taskSource);
  }

  public loadTaskData(): void {
    this.service.getAllTasks().subscribe(res => {
      this.taskSource = res;
    });
  }

  addTask(){
    const addTache = new Tache()
    if (this.newTaskDescription!=null){
      addTache.description=this.newTaskDescription;

      this.service.addTask(addTache).subscribe(res => {
        this.loadTaskData()
      })
    }
  }

  private loadData(): void {
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

    this.service.getRequestsDistribution('Incident').subscribe(
      count => {
        this.incidentCount = count;
        this.checkAndRenderChart();
      }
    );

    this.service.getRequestsDistribution('Information').subscribe(
      count => {
        this.informationCount = count;
        this.checkAndRenderChart();
      }
    );

    this.service.getRequestsDistribution('Claim').subscribe(
      count => {
        this.claimCount = count;
        this.checkAndRenderChart();
      }
    );

  }

  private allDataLoaded(): boolean {
    return this.totalRequests !== 0 && this.progressRequests !== 0 && this.escalatedRequests !== 0 &&
      this.resolvedRequests !== 0 && this.incidentCount !== 0 && this.informationCount !== 0 && this.claimCount !== 0;
  }

  private checkAndRenderChart(): void {
    if (this.allDataLoaded()) {
      this.renderChart();
    }
  }

  ngAfterViewInit(): void {
    this.renderChart();
  }

  renderChart(): void {
    if (this.allDataLoaded()) {
      const dataPieChart: any = {
        labels: ['Information', 'Claim', 'Incident'],
        series: [
          this.informationCount,
          this.claimCount,
          this.incidentCount
        ]
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

  applyFilters() {
    // Logic to filter data based on selectedCategory and selectedDateRange
  }

  ngOnDestroy(): void {
    if (this.websiteViewsChart3) {
      this.websiteViewsChart3.detach();
    }
  }
}
