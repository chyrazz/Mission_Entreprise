import { Component, OnInit } from '@angular/core';

export interface Request {
  id: number;
  name: string;
  status: string;
}

const REQUEST_DATA: Request[] = [
  {id: 1, name: 'Request 1', status: 'Pending'},
  {id: 2, name: 'Request 2', status: 'Completed'},
  {id: 3, name: 'Request 3', status: 'In Progress'},
  // Add more requests as needed
];

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'status', 'actions'];
  dataSource = REQUEST_DATA;

  constructor() { }

  ngOnInit(): void {
  }

  // Add methods for actions like edit and delete if necessary
}