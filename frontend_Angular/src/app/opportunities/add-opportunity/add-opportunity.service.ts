import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { OpportunityUser } from '../opportunity-list/opportunity-list-models';

@Injectable({
  providedIn: 'root'
})
export class AddOpportunityService {

constructor() { }


// from backend : user token to get connected user
getConnectedUser(): Observable<OpportunityUser>{
  return of({
    id: 1, 
    name: 'User 1'
  })
}

}
