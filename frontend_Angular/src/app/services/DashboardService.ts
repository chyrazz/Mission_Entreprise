import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
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

    getConversionRate(): Observable<number> {
        return this.httpClient.get<number>(`${this.baseUrl}/conversion-rate`);
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

    getTotalContracts(): Observable<number> {
        return this.httpClient.get<number>(`${this.baseUrl}/totalContracts`);
      }

    getTerminatedContracts(): Observable<number> {
        return this.httpClient.get<number>(`${this.baseUrl}/terminatedContracts`);
      }

    getPendingContracts(): Observable<number> {
        return this.httpClient.get<number>(`${this.baseUrl}/pendingContracts`);
      }

    getTotalOpportunities(): Observable<number> {
        return this.httpClient.get<number>(`${this.baseUrl}/totalOpportunities`);
      }
    
    getWonOpportunities(): Observable<number> {
        return this.httpClient.get<number>(`${this.baseUrl}/wonOpportunities`);
      }
    
    getRejectedOpportunities(): Observable<number> {
        return this.httpClient.get<number>(`${this.baseUrl}/rejectedOpportunities`);
      }
    
    getPendingOpportunities(): Observable<number> {
        return this.httpClient.get<number>(`${this.baseUrl}/pendingOpportunities`);
      }
    
    getTotalRequests(): Observable<number> {
        return this.httpClient.get<number>(`${this.baseUrl}/totalRequests`);
      }
    
    getProgressRequests(): Observable<number> {
        return this.httpClient.get<number>(`${this.baseUrl}/progressRequests`);
      }
    
    getEscalatedRequests(): Observable<number> {
        return this.httpClient.get<number>(`${this.baseUrl}/escalatedRequests`);
      }
    
    getResolvedRequests(): Observable<number> {
        return this.httpClient.get<number>(`${this.baseUrl}/resolvedRequests`);
      }

    getRequestsDistribution(type: string): Observable<number> {
        let params = new HttpParams().set('type', type);
        return this.httpClient.get<number>(`${this.baseUrl}/distribution`, { params });
      }


    getAllTasks(): Observable<any[]> {
        return this.httpClient.get<any[]>(`${this.baseUrl}/getAll`)
      }
  
    addTask(task:any) {
        return this.httpClient.post(`${this.baseUrl}/addTask`,task)
      }
  
    editTask(task:any) {
        return this.httpClient.post(`${this.baseUrl}/tasks`,task)
      }

    deleteTask(id:any) {
        return this.httpClient.delete(`${this.baseUrl}/tasks/${id}`)    
  
}

    getOpportunitiesByCommercial(): Observable<number> {
      return this.httpClient.get<number>(this.baseUrl);
}
}