import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { AddOpportunityService } from './add-opportunity.service';
import {Guid} from 'guid-typescript'
import { OpportunityDetails, OpportunityStatus, OpportunityUser } from '../opportunity-list/opportunity-list-models';
@Component({
  selector: 'app-add-opportunity',
  templateUrl: './add-opportunity.component.html',
  styleUrls: ['./add-opportunity.component.css'], 

})
export class AddOpportunityComponent implements OnInit {

opportunityDetails : OpportunityDetails| null = null
  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    if (view === 'month') {
      const date = cellDate.getDate();
      return date === 1 || date === 20 ? 'example-custom-date-class' : '';
    }

    return '';
  };

  descriptionCtrl: FormControl<string> = new FormControl<string>(''); 
  closureDateCtrl: FormControl<string> = new FormControl<string>('', Validators.required); 
  
  userList : OpportunityUser[] = [
    {
      id: 1, 
      name: "User 1"
    },
    {
      id: 2, 
      name: "User 2"
    }, 
    {
      id: 3, 
      name: "User 3"
    }
  ]
  userCtrl: FormControl<OpportunityUser> = new FormControl<OpportunityUser>(this.userList[0]); 
  leadCtrl: FormControl<OpportunityUser> = new FormControl<OpportunityUser>(this.userList[0]); 
  addFormGroup: FormGroup = new FormGroup({
    descriptionCtrl: new FormControl<string>('') , 
    closureDateCtrl: new FormControl<string>(''), 
    userCtrl: this.userCtrl 
  })
  
  constructor(
    public dialogRef: MatDialogRef<AddOpportunityComponent>,
    @Inject(MAT_DIALOG_DATA) public data: OpportunityDetails, private fb : FormBuilder, private addOpportunityService: AddOpportunityService) { }

    onCloseDialog(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
if(this.data)this.opportunityDetails = this.data; 
else this.opportunityDetails = null
if(this.opportunityDetails){
  this.descriptionCtrl.setValue(this.opportunityDetails.description); 
  this.closureDateCtrl.setValue(this.opportunityDetails.creationDate); 
  this.leadCtrl.setValue(this.opportunityDetails.lead)
  this.userCtrl.setValue(this.userList.find((el)=> el.id == this.opportunityDetails.user.id&& el.name == this.opportunityDetails.user.name))

}
  if(!this.opportunityDetails)  this.addOpportunityService.getConnectedUser().subscribe((user)=>{
      this.leadCtrl.setValue(user)
    })


    this.addFormGroup = this.fb.group({
      descriptionCtrl: this.descriptionCtrl, 
      closureDateCtrl: this.closureDateCtrl, 
      userCtrl: this.userCtrl 
    })
  }

  onAddClick(){
    let formValue : OpportunityDetails = new OpportunityDetails(this.opportunityDetails? this.opportunityDetails.id: Guid.create().toString() ,  this.descriptionCtrl.value,this.opportunityDetails? this.opportunityDetails.creationDate: (new Date()).toDateString(), this.closureDateCtrl.value, [], this.userCtrl.value, this.leadCtrl.value,  OpportunityStatus.pending )
    this.dialogRef.close({
      formValue: formValue, 
      forUpdate: this.opportunityDetails? true : false
    })
  }

}
