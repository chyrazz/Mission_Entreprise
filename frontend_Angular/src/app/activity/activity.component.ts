import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivityService } from 'app/services/ActivityService';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent {

  displayedColumns: string[] = ['id', 'action', 'information', 'date','leadname','leadmail','leadTel','repname'];
  dataSource: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private ActServices: ActivityService, private http: HttpClient){
    this.getAllActivities();
    this.dataSource = new MatTableDataSource();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
  getAllActivities() {
    this.ActServices.getAllActivities().subscribe(res => {
      this.dataSource.data= res;
      this.dataSource.paginator = this.paginator;   
    })
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}


