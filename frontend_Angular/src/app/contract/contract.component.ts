import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Route, Router } from '@angular/router';
import { ContractService } from 'app/services/ContractService';


export interface Contract {
  id: string;
  EndDate: string;
  couverts: string;
  clauseParticuliers: string;
}

const ELEMENT_DATA: Contract[] = [
  {id: '1', EndDate: '2024-12-31', couverts: 'Type1', clauseParticuliers: 'oui'},
  {id: '2', EndDate: '2025-01-01', couverts: 'Type5', clauseParticuliers: 'non'},
  {id: '3', EndDate: '2024-12-31', couverts: 'Type4', clauseParticuliers: 'oui'},
  {id: '4', EndDate: '2025-01-01', couverts: 'Type7', clauseParticuliers: 'non'},
  {id: '5', EndDate: '2024-12-31', couverts: 'Type0', clauseParticuliers: 'oui'},
  {id: '6', EndDate: '2025-01-01', couverts: 'Type4', clauseParticuliers: 'non'},
  {id: '7', EndDate: '2024-12-31', couverts: 'Type2', clauseParticuliers: 'oui'},
  {id: '8', EndDate: '2025-01-01', couverts: 'Type3', clauseParticuliers: 'non'},
  {id: '66', EndDate: '2024-12-31', couverts: 'Type1', clauseParticuliers: 'oui'},
  {id: '76', EndDate: '2025-01-01', couverts: 'Type5', clauseParticuliers: 'non'},
  {id: '35', EndDate: '2024-12-31', couverts: 'Type4', clauseParticuliers: 'oui'},
  {id: '47', EndDate: '2025-01-01', couverts: 'Type7', clauseParticuliers: 'non'},
  {id: '57', EndDate: '2024-12-31', couverts: 'Type0', clauseParticuliers: 'oui'},
  {id: '60', EndDate: '2025-01-01', couverts: 'Type4', clauseParticuliers: 'non'},
  {id: '79', EndDate: '2024-12-31', couverts: 'Type2', clauseParticuliers: 'oui'},
  {id: '80', EndDate: '2025-01-01', couverts: 'Type3', clauseParticuliers: 'non'},
  
];




@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.scss']
})
export class ContractComponent {
  email: any;
  displayedColumns: string[] = ['id', 'EndDate', 'couverts', 'clauseParticuliers'];
  mysources :any

  @ViewChild(MatSort) sort: MatSort;
selectedFilter: any;

  ngOnInit() {
    this.getAllProducts ()
  }


       constructor (private service : ContractService , private route : Router){
        this.mysources = new MatTableDataSource ()
       } 


  getAllProducts() {
    this.service.getAllContracts().subscribe(res => {
      this.mysources.data= res;
      
    })
  }


  @ViewChild(MatPaginator) paginator: MatPaginator;
 

  contractSearch(event: KeyboardEvent): void {
    const input = (event.target as HTMLInputElement).value;
    console.log(input); // Vous pouvez remplacer cette ligne par votre logique de recherche
  

  }
  setFilterType(filterType: string): void {
    this.selectedFilter = filterType;
  }

  contractSearchF(event: Event, filterType: string): void {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    if (filterType === 'id') {
      this.mysources.filterPredicate = (data, filter) => data.id.toString().toLowerCase().includes(filter);
    } else if (filterType === 'type') {
      this.mysources.filterPredicate = (data, filter) => data.couverts.toLowerCase().includes(filter);
    } else if (filterType === 'clause') {
      this.mysources.filterPredicate = (data, filter) => data.clauseParticuliers.toLowerCase().includes(filter);
    }
    this.mysources.filter = filterValue;
  }

  modify (id:any){ this.route.navigate(['/contract-modiy', id]);}
  details (id:any){ this.route.navigate(['/contract-details', id]);}

}