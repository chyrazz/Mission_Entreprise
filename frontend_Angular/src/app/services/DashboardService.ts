import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ECausesDisqualified } from "app/model/enums";
import { EUserStatus } from "app/model/EUserStatus";
import { User } from "app/model/User";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  
export class DashboardService{
    private baseUrl = 'http://localhost:9000/CRM/dashboard';
  
    constructor(private httpClient: HttpClient) { }
  
    getTotalClients(): Observable<number> {
        return this.httpClient.get<number>(`${this.baseUrl}/totalClients`);
      }

    getTotalLeads(): Observable<number> {
        return this.httpClient.get<number>(`${this.baseUrl}/totalLeads`);
      }

    getLeadsByStatus(s: string): Observable<number> {
        let params = new HttpParams().set('s', s);
        return this.httpClient.get<number>(`${this.baseUrl}/leadsStatus`, { params });
      }
    
    getClientsByMonth(month: number): Observable<number> {
        return this.httpClient.get<number>(`${this.baseUrl}/clientsMonth/${month}`);
      }
    
    getCauseDisqualified(ed: string): Observable<number> {
        let params = new HttpParams().set('ed', ed);
        return this.httpClient.get<number>(`${this.baseUrl}/causesDisqualified`, { params });
      }

}