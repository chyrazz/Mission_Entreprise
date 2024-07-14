import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { OpportunityDetails, OpportunityStatus } from '../opportunity-list/opportunity-list-models';
import { Guid } from 'guid-typescript';
import { OpportunityStateService } from './opportunity-state.service';

@Injectable({
  providedIn: 'root'
})
export class UserOpportunityListService {




  fakeList = [
    new OpportunityDetails(
      Guid.create().toString(),
      "Opportunity 1",
      "2024-11-04T14:51:06.157Z",
      "2024-11-04T14:51:06.157Z",
      [{ id: 1, name: "test.pdf" }],
      {
        id: 1,
        name: "User 1",
      },
      {
        id: 2,
        name: "User 2",
      }, 
      OpportunityStatus.pending
    ),
    new OpportunityDetails(
      Guid.create().toString(),
      "Opportunity 2",
      "2024-11-04T14:51:06.157Z",
      "2024-11-04T14:51:06.157Z",
      [{ id: 1, name: "test.pdf" }],
      {
        id: 1,
        name: "User 1",
      },
      {
        id: 2,
        name: "User 2",
      }, 
      OpportunityStatus.pending
    ),
    new OpportunityDetails(
      Guid.create().toString(),
      "Opportunity 3",
      "2024-11-04T14:51:06.157Z",
      "2024-11-04T14:51:06.157Z",
      [{ id: 1, name: "test.pdf" }],
      {
        id: 1,
        name: "User 1",
      },
      {
        id: 2,
        name: "User 2",
      }, 
      OpportunityStatus.pending
    ),
    new OpportunityDetails(
      Guid.create().toString(),
      "Opportunity 1",
      "2024-11-04T14:51:06.157Z",
      "2024-11-04T14:51:06.157Z",
      [{ id: 1, name: "test.pdf" }],
      {
        id: 1,
        name: "User 1",
      },
      {
        id: 2,
        name: "User 2",
      }, 
      OpportunityStatus.pending
    ),
    new OpportunityDetails(
      Guid.create().toString(),
      "Opportunity 1",
      "2024-11-04T14:51:06.157Z",
      "2024-11-04T14:51:06.157Z",
      [{ id: 1, name: "test.pdf" }],
      {
        id: 1,
        name: "User 1",
      },
      {
        id: 2,
        name: "User 2",
      }, 
      OpportunityStatus.pending
    ),
    new OpportunityDetails(
      Guid.create().toString(),
      "Opportunity 1",
      "2024-11-04T14:51:06.157Z",
      "2024-11-04T14:51:06.157Z",
      [{ id: 1, name: "test.pdf" }],
      {
        id: 1,
        name: "User 1",
      },
      {
        id: 2,
        name: "User 2",
      }, 
      OpportunityStatus.pending
    ),
    new OpportunityDetails(
      Guid.create().toString(),
      "Opportunity 1",
      "2024-11-04T14:51:06.157Z",
      "2024-11-04T14:51:06.157Z",
      [{ id: 1, name: "test.pdf" }],
      {
        id: 1,
        name: "User 1",
      },
      {
        id: 2,
        name: "User 2",
      }, 
      OpportunityStatus.pending
    ),
    new OpportunityDetails(
      Guid.create().toString(),
      "Opportunity 1",
      "2024-11-04T14:51:06.157Z",
      "2024-11-04T14:51:06.157Z",
      [{ id: 1, name: "test.pdf" }],
      {
        id: 1,
        name: "User 1",
      },
      {
        id: 2,
        name: "User 2",
      }, 
      OpportunityStatus.pending
    ),
    new OpportunityDetails(
      Guid.create().toString(),
      "Opportunity 1",
      "2024-11-04T14:51:06.157Z",
      "2024-11-04T14:51:06.157Z",
      [{ id: 1, name: "test.pdf" }],
      {
        id: 1,
        name: "User 1",
      },
      {
        id: 2,
        name: "User 2",
      }, 
      OpportunityStatus.pending
    ),
    new OpportunityDetails(
    Guid.create().toString(),
      "Opportunity 1",
      "2024-11-04T14:51:06.157Z",
      "2024-11-04T14:51:06.157Z",
      [{ id: 1, name: "test.pdf" }],
      {
        id: 1,
        name: "User 1",
      },
      {
        id: 2,
        name: "User 2",
      }, 
      OpportunityStatus.pending
    ),
    new OpportunityDetails(
    Guid.create().toString(),
      "Opportunity 1",
      "2024-11-04T14:51:06.157Z",
      "2024-11-04T14:51:06.157Z",
      [{ id: 1, name: "test.pdf" }],
      {
        id: 1,
        name: "User 1",
      },
      {
        id: 2,
        name: "User 2",
      }, 
      OpportunityStatus.pending
    ),
    new OpportunityDetails(
      Guid.create().toString(),
      "Opportunity 1",
      "2024-11-04T14:51:06.157Z",
      "2024-11-04T14:51:06.157Z",
      [{ id: 1, name: "test.pdf" }],
      {
        id: 1,
        name: "User 1",
      },
      {
        id: 2,
        name: "User 2",
      }, 
      OpportunityStatus.pending
    ),
    
    ]
constructor(private opportunityStateService: OpportunityStateService) { }
getUserOpportunityList(item : string): Observable<OpportunityDetails[]> {
  let list  = this.fakeList
  if(item == '') list  = this.fakeList
    else  list  = this.fakeList.filter((el)=>{
      if( el.description.toLowerCase().includes(item.toLowerCase())) return el
     })
  
  console.log(list)
  return of((list)).pipe(delay(2000));
}

onAcceptOpportnity(opportunityId : string){

  this.fakeList.map((el)=>{
    if(el.id== opportunityId)  
      el.acceptOpportunity();
    })
    this.opportunityStateService.acceptOpportunity.next(opportunityId)
}
onDeclineOpportnity(opportunityId : string){
  this.fakeList.map((el)=>{
    if(el.id== opportunityId)  
      el.declineOpportunity();
    })
    this.opportunityStateService.declineOpportunity.next(opportunityId)

}
}
 