
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  
export class RequestService{
    readonly API_URL = 'http://localhost:9000/CRM/Request';
  
    constructor(private httpClient: HttpClient) { }
  
    getAllReq(): Observable<any[]> {
      return this.httpClient.get<any[]>(`${this.API_URL}/GetRequests`)
    }
    
    getReqByid(id:number) {
      return this.httpClient.get(`${this.API_URL}/GetRequest/${id}`)
    }

    addReq(Req:any) {
      return this.httpClient.post(`${this.API_URL}/addCRequest`,Req)
    }

    editReq(Req:any) {
      return this.httpClient.post(`${this.API_URL}/UpdateCRequest`,Req)
    }


}
