import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {NativeDateAdapter} from '@angular/material/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { leadService } from 'app/services/leadService';
import { HttpClient } from '@angular/common/http';
import { User } from 'app/model/User';
import { ActivityService } from 'app/services/ActivityService';
import { Activity } from 'app/model/Activity';

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.scss'],

})
export class AddActivityComponent implements OnInit {
  

  constructor(private formBuilder: FormBuilder,private leadServices: leadService,private ActServices: ActivityService, private http: HttpClient){
    this.getAllLeads();
  }
  
  leadSource:User[]=[]

  ActForm=this.formBuilder.group({
    action: new FormControl("", [Validators.required]),
    comment: new FormControl("", [Validators.required]),
    lead: new FormControl("", [Validators.required]),
    date:new FormControl(new Date,[Validators.required]),
  });
  
  ngOnInit(): void {
    this.getAllLeads();
  }
  
  getAllLeads() {
    this.leadServices.getAllLead().subscribe(res => {
      this.leadSource= res;    
    })
    
  }

  save(act){ 
 
    let newAct = new Activity(act.value.action,act.value.comment,new Date());

    this.leadServices.getLeadByid(act.value.lead).subscribe((res)=>{
      newAct.lead=res
    })

    this.leadServices.getLeadByid(3).subscribe((res)=>{
      newAct.repAct=res
    })

   console.log(newAct)
    this.ActServices.addAct(newAct).subscribe(() => {
      
    })
  }
}
