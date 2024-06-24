import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignINComponent {
  
  constructor(protected router: Router)
  {

  }

  home(){ 
    this.router.navigate(['/dashboard']);
  }
}
