import {AfterViewInit, Component, TemplateRef, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { table } from 'console';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

export class TableRowBindingExample {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  clickedRows = new Set<PeriodicElement>();
}


@Component({
  selector: 'app-lead',
  templateUrl: './lead.component.html',
  styleUrls: ['./lead.component.scss'],

})

export class LeadComponent implements AfterViewInit  {
  
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
 
  id:number=8764;
  name:string= "";
  lastname:string="";
  email:string="foulen@gmail.com";
  phone1:string="22888999";
  phone2:string="";
  adress:string="ben arous , nouvelle madina";
  dateIns:Date=new Date();
  Status:string="qualified";
  StatusCardColor!:string;
  clicked:boolean=false;
  @ViewChild('dialogContent') dialogContent!: TemplateRef<any>;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  selectedRow(row) {
     this.name= row.name;
     this.lastname=row.symbol;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  constructor(public dialog: MatDialog) {
    if(this.Status="en attente")
      this.StatusCardColor="warning";
    else if (this.Status="disqualified")
      this.StatusCardColor="danger";
      else this.StatusCardColor="success";
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(this.dialogContent);
  }
}
