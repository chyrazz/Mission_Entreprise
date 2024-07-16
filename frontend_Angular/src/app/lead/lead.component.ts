import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ERole } from 'app/model/ERole';
import { EUserStatus } from 'app/model/EUserStatus';
import { User } from 'app/model/User';
import { CsvExportService } from 'app/services/CsvExportService';
import { leadService } from 'app/services/leadService';
import { table } from 'console';
import { now } from 'moment';
import { Observable } from 'rxjs';


export class TableRowBindingExample {
  displayedColumns: string[] = ['id', 'name', 'last_name', 'phone_number1', 'inscrip_date', 'status'];
  dataSource = new MatTableDataSource();
  clickedRows = new Set<User>();
}


@Component({
  selector: 'app-lead',
  templateUrl: './lead.component.html',
  styleUrls: ['./lead.component.scss'],

})

export class LeadComponent implements AfterViewInit, OnInit {


  displayedColumns: string[] = ['id', 'name', 'last_name', 'phone_number1', 'inscrip_date', 'status'];
  dataSource: any;

  id: number=0;
  clicked: boolean = false;
  ActionEnabled:boolean=true;
  SaveEnabled:boolean=false;
  show=false;
  adduserBtn!:boolean;

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  fruitCtrl = new FormControl();
  filteredFruits: Observable<string[]>;
  statusLD: string[] = ['En_attente', 'Qualified', 'Disqualified'];
  allstatusLd: string[] = ['En_attente', 'Qualified', 'Disqualified'];

  remove(fruit: string): void {
    const index = this.statusLD.indexOf(fruit);

    if (index >= 0) {
      this.statusLD.splice(index, 1);
    }
  }

  selectall(){
    this.statusLD.splice(0,3);
    for (let s of this.allstatusLd) {
    this.statusLD.push(s)
    }
  }

  selectedValue=""
  Act=false;
  @ViewChild('dialogContent') dialogContent!: TemplateRef<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  fileupload:File

  constructor(public snackBar: MatSnackBar,public dialog: MatDialog, 
    private route:Router,
    private formBuilder: FormBuilder,private leadServices: leadService, private http: HttpClient,private csvExportService: CsvExportService) {
    this.getAllProducts();
    this.dataSource = new MatTableDataSource();
  }

  exportData() {
    this.csvExportService.exportToCsv('data.csv', this.dataSource);
  }

  ngAfterViewInit() {
    this.getAllProducts();
  }


  getAllProducts() {
    this.leadServices.getAllLead().subscribe(res => {
      this.dataSource.data= res;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      
    })
  }

  ngOnInit(): void {
    this.getAllProducts();
  }

  selectedRow(row) {
    this.id = row.id|0;
    this.Act=true;
    this.route.navigate(['/detail-lead', row]);
  }

  

    close(){
      this.show=false;
    }

  applyFilter(event: Event) {
    this. clearFilters()
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }



  filtreStatus(filterValue: string, column: string) {
    this.dataSource.filterPredicate = (data, filter) => {
      const dataStr = data[column] && data[column].toString().toLowerCase();
      return dataStr.indexOf(filter.toLowerCase()) !== -1;
    };
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  clearFilters(){
    this.dataSource.filter = '';  
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(this.dialogContent);
  }

  fileName=""
  
  selectFile(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file: File | null = input.files ? input.files[0] : null;

    if (file) {
        this.leadServices.pushFileToStorage(file).subscribe(res => {
            this.show=true
            this.dialog.closeAll()
          this.getAllProducts();
           
        }, error => {
            console.error('File upload failed', error);
        });
    } else {
        console.error('No file selected');
    }
}


}


