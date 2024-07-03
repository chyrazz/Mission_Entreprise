import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CsvExportService } from 'app/services/CsvExportService';
import { leadService } from 'app/services/leadService';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
 
})
export class ClientComponent {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  displayedColumns: string[] = ['id', 'name', 'last_name', 'phone_number1', 'inscrip_date'];
  dataSource: any;

  constructor(private leadServices: leadService, private http: HttpClient,private csvExportService: CsvExportService) {
    this.getAllProducts();
    this.dataSource = new MatTableDataSource();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  exportData() {
    this.csvExportService.exportToCsv('Client.csv', this.dataSource);
  }

  getAllProducts() {
    this.leadServices.getAllClient().subscribe(res => {
      this.dataSource.data= res;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      
    })
  }

}
