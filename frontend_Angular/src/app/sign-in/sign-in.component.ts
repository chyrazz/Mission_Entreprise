import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignINComponent  {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  
  constructor(protected router: Router,private formBuilder: FormBuilder,)
  { this.loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
});

  }


  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }


  home(){ 
    this.loading = true;
    this.router.navigate(['/dashboard']);
  }
}
