import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  
export class ActivityService{
    readonly API_URL = 'http://localhost:9000/CRM/Activity';
  
    constructor(private httpClient: HttpClient) { }
  
    getAllActivities(): Observable<any[]> {
      return this.httpClient.get<any[]>(`${this.API_URL}/GetAct`)
    }

    addAct(act:any) {
      return this.httpClient.post(`${this.API_URL}/addAct`,act)
    }
    
}