import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RequestService } from 'app/services/RequestService';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  displayedColumns: string[] = ['id','title','type','CreationDate','criticity', 'description','status'];
  dataSource: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(private service:RequestService){
    this.getAllTickets();
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
   
    this.getAllTickets();
  }


  getAllTickets() {
    this.service.getAllReq().subscribe(res => {
      console.log(res)
      this.dataSource.data= res;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

}