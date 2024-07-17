import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContractService {
  private apiUrl = 'http://localhost:9000/CRM/Contracts'; 

  constructor(private httpClient: HttpClient) { }

  getAllContracts(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}/GetContract`)
  }

  getContractById(id: string) {
    return this.httpClient.get(`${this.apiUrl}/GetContract/${id}`);
  }

  addContract(contract: any) {
    return this.httpClient.post(`${this.apiUrl}/addContract`,contract);
  }

  updateContract(id: string, contract: any) {
    return this.httpClient.put(`${this.apiUrl}/editContract` ,contract)
 }

  deleteContract(id: string, contract: any) {
    return this.httpClient.delete(`${this.apiUrl}/deleteContract` ,contract)
 }
}
