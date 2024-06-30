import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { leadService } from 'app/services/leadService';

@Component({
  selector: 'app-lead-details',
  templateUrl: './lead-details.component.html',
styleUrls: ['./lead-details.component.scss']
})
export class LeadDetailsComponent {

  LeadForm=this.formBuilder.group({
    firstname: new FormControl("", [Validators.required]),
    lastname: new FormControl("", [Validators.required]),
    adresse: new FormControl("", [Validators.required]),
    phone1: new FormControl("", [Validators.required, Validators.pattern("[2,5,9]{1}[0-9]{7}")]),
    phone2: new FormControl("", [Validators.pattern("[2,5,9]{1}[0-9]{7}")]),
    mail: new FormControl("", [Validators.required, Validators.email]),
    datecreate:new FormControl(new Date),
    status:new FormControl("En attente")
  });
messageNotif: string;
statusNotif!:string;
id: number=0;
clicked: boolean = false;
ActionEnabled:boolean=true;
SaveEnabled:boolean=false;
show=false;
adduserBtn!:boolean;

selectedValue=""
Act=false;

  constructor(public snackBar: MatSnackBar, private formBuilder: FormBuilder,private leadServices: leadService, private http: HttpClient) {
   
  }
}
