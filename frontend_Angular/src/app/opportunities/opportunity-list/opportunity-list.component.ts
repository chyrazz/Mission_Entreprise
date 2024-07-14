import { ChangeDetectorRef, Component } from "@angular/core";
import { OpportunityListService } from "./opportunity-list.service";
import { OpportunityDetails, OpportunityStatus, OpportunityUser } from "./opportunity-list-models";
import { MatDialog } from "@angular/material/dialog";
import { debounceTime, Subject } from "rxjs";
import { AddOpportunityComponent } from "../add-opportunity/add-opportunity.component";

@Component({
  selector: "opportunity-list",
  standalone: false,
  templateUrl: "./opportunity-list.component.html",
  styleUrls: ["./opportunity-list.component.scss"],
})
export class OpportunityListComponent {
isPending : boolean = false
  searchEvent: Subject<string> = new Subject<string>()
  opportunityList: OpportunityDetails[] = [];
  OpportunityStatus = OpportunityStatus;
  constructor(private opportunityListService: OpportunityListService, public dialog: MatDialog, private cdr: ChangeDetectorRef) {}


  openDialog(): void {
    let dialogRef = this.dialog.open(AddOpportunityComponent, {
      width: '600px',
      height: '600px', 
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result) {
      if(!result.forUpdate) this.opportunityList.unshift(result.formValue)
      }
    });
  }


  ngOnInit() {
    this.searchEvent.pipe(debounceTime(500)).subscribe((value)=>{
    this.getOpportunities(value)

    })
  this.getOpportunities('')
  }

  getOpportunities(item: string){
    this.isPending= true
    this.opportunityListService.getOpportunityList(item).subscribe((data) => {
      this.opportunityList = data;
      console.log('opportunityList', this.opportunityList);
      this.isPending = false;
    });
  }

  onDeleteOpportunity(opportunity : OpportunityDetails){
    opportunity.hide()
  }
  onSearchByDescription(item: string) {
    this.searchEvent.next(item)
  }

  onUpdate(details : OpportunityDetails){
    let dialogRef = this.dialog.open(AddOpportunityComponent, {
      width: '600px',
      height: '600px', 
      data: details
    });

    dialogRef.afterClosed().subscribe((result :{forUpdate : string, formValue : OpportunityDetails} ) => {

      if (result) {
      if(result.forUpdate ) {
        this.opportunityListService.updateOpportunity(result.formValue)
        this.getOpportunities('')
      }
      }
    });
  }
  
}
