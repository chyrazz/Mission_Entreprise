import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
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
  


  constructor(public snackBar: MatSnackBar,public dialog: MatDialog, private formBuilder: FormBuilder,private leadServices: leadService, private http: HttpClient,private csvExportService: CsvExportService) {
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
    //this.LeadForm.disable();
    this.id = row.id|0;
    this.Act=true;
   /* this.LeadForm.setValue({firstname:row.name,
      lastname:row.lastname,
      adresse:row.adr,
      phone1:row.phoneNumber1,
      mail:row.email,
      phone2:row.phoneNumber2,
      datecreate:row.creationdate,
      status:row.status
    });*/
  }

  
  EditUser(id: number) {
    /*
    if(id!=0){
    //  this.LeadForm.enable();
 
      this.adduserBtn=false;
      this.ActionEnabled=false;
      this.SaveEnabled=true;
    }else{
      this.showNotif("please select a lead to modify !","danger",true);
    }
    }

    showNotif(msj,status,show){
      this.messageNotif=msj;
      this.statusNotif=status;
      this.show=show;
    }

    cancel(id: number){
      this.ActionEnabled=true;
      this.SaveEnabled=false;
      this.LeadForm.disable();
    }

    addUser(){
      this.ActionEnabled=false;
      this.LeadForm.enable();
      this.LeadForm.controls['datecreate'].disable();
      this.LeadForm.controls['status'].disable();
      
      this.SaveEnabled=true;
      this.LeadForm.reset();
      this.adduserBtn=true;
      this.id=0;
      */
    }
   
   
    save(LeadForm){
/*

      if(this.adduserBtn){
        if(this.LeadForm.valid){
        const newUser = {
          
          "name": LeadForm.value.firstname,
          "lastname": LeadForm.value.lastname,
          "adr": LeadForm.value.adresse,
          "email": LeadForm.value.mail,
          "password": "",
          "phoneNumber1": LeadForm.value.phone1,
          "phoneNumber2":LeadForm.value.phone2,
          "creationdate":new Date(),
          "status": EUserStatus.En_attente,
          "role":ERole.Lead
          }
        this.leadServices.addLead(newUser).subscribe(() => {
          this.getAllProducts();
          this.LeadForm.reset();
          this.ActionEnabled=true;
          this.SaveEnabled=false;
          this.showNotif("Lead added successfully !","success",true);
        })
      }else{
    
        this.snackBar.open("Please fill in the form !", 'Close', {
          duration: 5000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom'
        });        
    }
      }else{
        const leadId=this.id;
        const editedUser = {
          "id":leadId,
          "name": LeadForm.value.firstname,
          "lastname": LeadForm.value.lastname,
          "adr": LeadForm.value.adresse,
          "email": LeadForm.value.mail,
          "phoneNumber1": LeadForm.value.phone1,
          "phoneNumber2":LeadForm.value.phone2,
          "status": LeadForm.value.status,
          }
        this.leadServices.editLead(editedUser).subscribe(() => {
          this.showNotif("Lead updated successfully !","warning",true);
          this.ActionEnabled=true;
          this.SaveEnabled=false;
          this.getAllProducts();
          this.selectedRow(LeadForm);
          this.id=leadId;
          this.LeadForm.disabled;
          
        })
      }
     
    
  
    */
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
}


