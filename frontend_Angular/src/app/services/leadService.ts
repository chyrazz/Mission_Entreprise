import { HttpClient, HttpEvent, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "app/model/User";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  
export class leadService{
    readonly API_URL = 'http://localhost:9000/CRM/Lead';
  
    constructor(private httpClient: HttpClient,private https: HttpClient) { }
  
    getAllLead(): Observable<any[]> {
      return this.httpClient.get<any[]>(`${this.API_URL}/Getlead`)
    }
    
    getAllClient(): Observable<any[]> {
      return this.httpClient.get<any[]>(`${this.API_URL}/Getclients`)
    }

    getLeadByid(id:number) {
      return this.httpClient.get(`${this.API_URL}/Getlead/${id}`)
    }

    addLead(user:any) {
      return this.httpClient.post(`${this.API_URL}/addlead`,user)
    }

    editLead(user:any) {
      return this.httpClient.post(`${this.API_URL}/editlead`,user)
    }

    pushFileToStorage(file: File): Observable<any> {
      const formData: FormData = new FormData();
      formData.append('file', file, file.name);

      return this.httpClient.post(`${this.API_URL}/upload`, formData);
    }
}