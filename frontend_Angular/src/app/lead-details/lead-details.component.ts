import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ERole } from 'app/model/ERole';
import { EUserStatus } from 'app/model/EUserStatus';
import { User } from 'app/model/User';
import { leadService } from 'app/services/leadService';

@Component({
  selector: 'app-lead-details',
  templateUrl: './lead-details.component.html',
  styleUrls: ['./lead-details.component.scss']
})
export class LeadDetailsComponent implements OnInit {


  LeadForm = this.formBuilder.group({
    firstname: new FormControl("", [Validators.required]),
    lastname: new FormControl("", [Validators.required]),
    adresse: new FormControl("", [Validators.required]),
    phone1: new FormControl("", [Validators.required, Validators.pattern("[2,5,9]{1}[0-9]{7}")]),
    phone2: new FormControl("", [Validators.pattern("[2,5,9]{1}[0-9]{7}")]),
    mail: new FormControl("", [Validators.required, Validators.email]),
    datecreate: new FormControl(formatDate(new Date, 'yyyy-MM-dd', 'en')),
    status: new FormControl("En attente")
  });
  messageNotif: string;
  statusNotif!: string;
  id: number = 0;
  clicked: boolean = false;
  ActionEnabled: boolean = true;
  SaveEnabled: boolean = false;
  show = false;
  adduserBtn!: boolean;

  selectedValue = ""
  Act = false;

  editData!: any;
  constructor(public snackBar: MatSnackBar, private route: Router, private Activeroute: ActivatedRoute,
    private formBuilder: FormBuilder, private leadServices: leadService, private http: HttpClient) {

  }
  ngOnInit(): void {
    this.id = this.Activeroute.snapshot.params['id']
    //2- recuperer le produit par id
    if (this.id != null) {
      this.Act = true
      this.leadServices.getLeadByid(this.id).subscribe(
        (data: User) => {
          this.editData = {
            "firstname": data.name,
            "lastname": data.lastname,
            "adresse": data.adr,
            "mail": data.email,
            "phone1": data.phoneNumber1,
            "phone2": data.phoneNumber2,
            "datecreate": data.InscripDate,
            "status": data.status,
          };

          this.LeadForm.patchValue(this.editData);

        }
      )
    } else { this.id = 0 }
  }


  showNotif(msj, status, show) {
    this.messageNotif = msj;
    this.statusNotif = status;
    this.show = show;
  }

  cancel(id: number) {
    this.ActionEnabled = true;
    this.SaveEnabled = false;
    this.LeadForm.disable();
  }


  save(LeadForm) {
    console.log(this.id)
    if (this.id == 0) {
      if (this.LeadForm.valid) {
        this.LeadForm.enable();
        this.LeadForm.controls['datecreate'].disable();
        this.LeadForm.controls['status'].disable();
        const newUser = {

          "name": LeadForm.value.firstname,
          "lastname": LeadForm.value.lastname,
          "adr": LeadForm.value.adresse,
          "email": LeadForm.value.mail,
          "password": "",
          "phoneNumber1": LeadForm.value.phone1,
          "phoneNumber2": LeadForm.value.phone2,
          "creationdate": new Date(),
          "status": EUserStatus.En_attente,
          "role": ERole.Lead
        }
        this.leadServices.addLead(newUser).subscribe(() => {

          this.LeadForm.reset();
          this.ActionEnabled = true;
          this.SaveEnabled = false;
          this.showNotif("Lead added successfully !", "success", true);
          this.route.navigate(['/lead']);
        })
      } else {

        this.snackBar.open("Please fill in the form !", 'Close', {
          duration: 5000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom'
        });
      }
    } else {
      const leadId = this.id;
      const editedUser = {
        "id": leadId,
        "name": LeadForm.value.firstname,
        "lastname": LeadForm.value.lastname,
        "adr": LeadForm.value.adresse,
        "email": LeadForm.value.mail,
        "phoneNumber1": LeadForm.value.phone1,
        "phoneNumber2": LeadForm.value.phone2,
        "status": LeadForm.value.status,
        "role": ERole.Lead
      }

      if (editedUser.status == "Qualified") {
        editedUser.role = ERole.Client;
      }
      this.leadServices.editLead(editedUser).subscribe(() => {
        this.ActionEnabled = true;
        this.SaveEnabled = false;
        this.id = leadId;
        this.LeadForm.disabled;
      })
      if (editedUser.status == "Qualified") {
        this.route.navigate(['/client']);
      } else {
        this.route.navigate(['/lead']);
      }
    }

  }


}
