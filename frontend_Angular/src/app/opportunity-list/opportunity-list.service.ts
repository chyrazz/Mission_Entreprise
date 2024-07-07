import { Injectable } from "@angular/core";
import { delay, Observable, of } from "rxjs";
import { OpportunityDetails } from "./opportunity-list-models";

@Injectable({
  providedIn: "root",
})
export class OpportunityListService {
  constructor() {}

  getOpportunityList(item : string): Observable<OpportunityDetails[]> {
    let list  = fakeList
    if(item == '') list  = fakeList
      else  list  = fakeList.filter((el)=>{
        if( el.description.toLowerCase().includes(item.toLowerCase())) return el
       })
    
    console.log(list)
    return of((list)).pipe(delay(2000));
  }
}
const fakeList = [
  new OpportunityDetails(
    
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
    }
  ),
  new OpportunityDetails(
    
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
    }
  ),
  new OpportunityDetails(
    
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
    }
  ),
  new OpportunityDetails(
    
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
    }
  ),
  new OpportunityDetails(
    
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
    }
  ),
  new OpportunityDetails(
    
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
    }
  ),
  new OpportunityDetails(
    
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
    }
  ),
  new OpportunityDetails(
    
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
    }
  ),
  new OpportunityDetails(
    
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
    }
  ),
  new OpportunityDetails(
    
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
    }
  ),
  new OpportunityDetails(
    
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
    }
  ),
  new OpportunityDetails(
    
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
    }
  ),
  new OpportunityDetails(
    
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
    }
  ),
]