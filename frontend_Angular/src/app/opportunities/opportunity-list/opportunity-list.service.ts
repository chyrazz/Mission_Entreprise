import { Injectable } from "@angular/core";
import { delay, Observable, of } from "rxjs";
import { OpportunityDetails, OpportunityStatus } from "./opportunity-list-models";
import { Guid } from "guid-typescript";
import { OpportunityStateService } from "../user-opportunity-list/opportunity-state.service";

@Injectable({
  providedIn: "root",
})
export class OpportunityListService {
  constructor( opportunityStateService: OpportunityStateService) {
    opportunityStateService.acceptOpportunity.subscribe((opportunityId) => {
      this.fakeList.map((el)=>{
        if(el.id== opportunityId)  
          el.acceptOpportunity();
        })
    })
    opportunityStateService.declineOpportunity.subscribe((opportunityId) => {
      this.fakeList.map((el)=>{
        if(el.id== opportunityId)  
          el.declineOpportunity();
        })
    })
  }
  fakeList: OpportunityDetails[]= [
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


  updateOpportunity(opportunity: OpportunityDetails){
    this.fakeList.map((el)=>{
      if(el.id== opportunity.id)  
        el.updateValues(opportunity.id,opportunity.description, opportunity.closeDate, opportunity.user, opportunity.lead);
      })
  }

  getOpportunityList(item : string): Observable<OpportunityDetails[]> {
    let list  = this.fakeList
    if(item == '') list  = this.fakeList
      else  list  = this.fakeList.filter((el)=>{
        if( el.description.toLowerCase().includes(item.toLowerCase())) return el
      })
    return of((list)).pipe(delay(2000));
  }
}
