import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContractService } from 'app/services/ContractService';

@Component({
  selector: 'app-contractadd',
 
  templateUrl: './contractadd.component.html',
  styleUrls: ['./contractadd.component.scss']
})
export class ContractaddComponent {
  contractForm: FormGroup;
show: any;

  constructor(private fb: FormBuilder , private service : ContractService) {
    this.contractForm = this.fb.group({
      contractId: ['', Validators.required],
      endDate: ['', Validators.required],
      couverts: [''],
      clauseParticuliers: ['']
      // Add other form controls for contract details as needed
    });
  }

  ngOnInit(): void {
  }
  


  save(form: FormGroup) {
    if (form.valid) {
      
      console.log(form.value); // Example: Log form values to console
      this.service.addContract(form.value).subscribe({})
    } else {
      // Handle form validation errors or display messages
    }
  }



  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    // Voir Feres amdouni
    console.log(file);
}

}
