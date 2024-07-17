import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { OpportunityDetails, OpportunityStatus } from '../opportunity-list/opportunity-list-models';
import { AddOpportunityComponent } from '../add-opportunity/add-opportunity.component';
import { debounceTime, Subject } from 'rxjs';
import { OpportunityListService } from '../opportunity-list/opportunity-list.service';
import { MatDialog } from '@angular/material/dialog';
import { UserOpportunityListService } from './user-opportunity-list.service';

@Component({
  selector: 'user-opportunity-list',
  templateUrl: './user-opportunity-list.component.html',
  styleUrls: ['./user-opportunity-list.component.scss']
})
export class UserOpportunityListComponent implements OnInit {

  isPending : boolean = false
  searchEvent: Subject<string> = new Subject<string>()
  opportunityList: OpportunityDetails[] = [];
  OpportunityStatus = OpportunityStatus;
  constructor(private opportunityListService: UserOpportunityListService, public dialog: MatDialog, private cdr: ChangeDetectorRef) {}



  ngOnInit() {
    this.searchEvent.pipe(debounceTime(500)).subscribe((value)=>{
    this.getOpportunities(value)

    })
  this.getOpportunities('')
  }

  getOpportunities(item: string){
    this.isPending= true
    this.opportunityListService.getUserOpportunityList(item).subscribe((data) => {
      this.opportunityList = data;
      this.isPending = false;
    });
  }

  onAcceptOpportnity(opportunity : OpportunityDetails){
    opportunity.acceptOpportunity()
    this.opportunityListService.onAcceptOpportnity(opportunity)
  
    this.getOpportunities('')
  }
  onDeclineOpportnity(opportunity : OpportunityDetails){
    opportunity.declineOpportunity()
    this.opportunityListService.onDeclineOpportnity(opportunity)
    this.getOpportunities('')
  }
}
