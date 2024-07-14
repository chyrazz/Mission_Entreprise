import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpportunityStateService {
  acceptOpportunity: Subject<string> = new Subject<string>();
  declineOpportunity: Subject<string> = new Subject<string>();

constructor() { }

}
