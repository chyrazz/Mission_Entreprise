import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {NativeDateAdapter} from '@angular/material/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { leadService } from 'app/services/leadService';
import { HttpClient } from '@angular/common/http';
import { User } from 'app/model/User';
import { ActivityService } from 'app/services/ActivityService';
import { Activity } from 'app/model/Activity';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.scss'],

})
export class AddActivityComponent implements OnInit {
  

  constructor(private route:Router,private formBuilder: FormBuilder,private leadServices: leadService,private ActServices: ActivityService, private http: HttpClient){
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

    //get id lead
    this.leadServices.getLeadByid(act.value.lead).subscribe((res)=>{
      newAct.lead=res
    
       //get id rep
    this.leadServices.getLeadByid(3).subscribe((res)=>{
      newAct.repAct=res

 //save activity
    this.ActServices.addAct(newAct).subscribe(() => {
      this.route.navigate(['/activity']);
    })
  })
  })
  }
}
