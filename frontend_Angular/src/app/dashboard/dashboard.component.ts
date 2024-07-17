import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ClientsDashboardComponent } from 'app/clients-dashboard/clients-dashboard.component';
import { ContractsDashboardComponent } from 'app/contracts-dashboard/contracts-dashboard.component';
import { SupportDashboardComponent } from 'app/support-dashboard/support-dashboard.component';
import * as Chartist from 'chartist';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  @ViewChild(ContractsDashboardComponent) chart2Component: ContractsDashboardComponent;
  @ViewChild(SupportDashboardComponent) chart3Component: SupportDashboardComponent;
  @ViewChild(ClientsDashboardComponent) chart1Component: ClientsDashboardComponent;
 
  onTabChange(event: MatTabChangeEvent) {
    if (event.index === 0) {
      this.chart1Component.renderChart();
    } else if (event.index === 1) {
      this.chart2Component.renderChart();
    }else if(event.index===2){
      this.chart3Component.renderChart();
    }
  }
}
