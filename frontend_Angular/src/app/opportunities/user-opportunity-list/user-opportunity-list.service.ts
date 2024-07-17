import { Injectable } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';
import { OpportunityDetails, OpportunityStatus, opprtunite } from '../opportunity-list/opportunity-list-models';
import { Guid } from 'guid-typescript';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserOpportunityListService {




  fakeList = [
    
    ]
constructor( private http: HttpClient) { }

getUserOpportunityList(item : string): Observable<OpportunityDetails[]>{
  return this.http.get<opprtunite[]>('/api/opportunities').pipe(map((res)=>{
    if(item=='')
      return res.map((el)=>{return new OpportunityDetails(el.id, el.description, el.dateCreation, el.dateCloture, el.attachements, el.utilisateur, el.lead, el.statut)})
    else        return res.map((el)=>{return new OpportunityDetails(el.id, el.description, el.dateCreation, el.dateCloture, el.attachements, el.utilisateur, el.lead, el.statut)})
    .filter((el)=>{
      if( el.description.toLowerCase().includes(item.toLowerCase())) return el})
  }))
}

updateOpportunity(opportunity: OpportunityDetails): Observable<any>{
  let opp : opprtunite = {
    attachements: opportunity.attachementList, 
    dateCloture: opportunity.closeDate,
    dateCreation: opportunity.creationDate, 
    description: opportunity.description,
    id: opportunity.id,
    lead: opportunity.lead,
    statut: opportunity.status,
    utilisateur: opportunity.user
  }
  const url = `/api/opportunities/${opp.id}`;
  return this.http.put<opprtunite>(url, opp).pipe((res)=>{return res});
}
onAcceptOpportnity(opportunity : OpportunityDetails){
  this.updateOpportunity(opportunity).subscribe((res)=>{})
 
}
onDeclineOpportnity(opportunity : OpportunityDetails){
  this.updateOpportunity(opportunity).subscribe((res)=>{})

}
}
 