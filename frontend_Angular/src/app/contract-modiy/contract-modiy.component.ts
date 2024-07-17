import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Contract } from 'app/contract/contract.component';
import { ContractService } from 'app/services/ContractService';

@Component({
  selector: 'app-contract-modiy',
  
  templateUrl: './contract-modiy.component.html',
  styleUrls: ['./contract-modiy.component.scss']
})
export class ContractModiyComponent  implements OnInit{

  show:any;
  contractForm: FormGroup;
  contractId: number;
  contract: Contract;
  endDate: any;
  startDate: any;
  Remarques: any;
  modeDePaiement: any;
  clauseParticuliers: any;
  couverts: any;
  Montant: any;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute ,
    private contractService : ContractService
  ) {}

  getContractDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.contractService.getContractById(id).subscribe( data => {
        
        this.contract = {
          "id": id,
          
          "couverts": this.couverts,
          "clauseParticuliers": this.clauseParticuliers,
          "EndDate": this.endDate, 
        };

        this.contractForm.patchValue(this.contract); }
      );
    }
  }

  ngOnInit() {
    this.contractId = +this.route.snapshot.paramMap.get('id');
    this.getContractDetails();
  
  
    

    // Simuler la récupération des données du contrat
    const contractData = this.getContractDataById(this.contractId);

    this.contractForm = this.fb.group({
      contractId: [contractData.contractId, Validators.required],
      Montant: [contractData.Montant],
      couverts: [contractData.couverts],
      clauseParticuliers: [contractData.clauseParticuliers],
      modeDePaiement: [contractData.modeDePaiement],
      Remarques: [contractData.Remarques],
      startDate: [contractData.startDate],
      endDate: [contractData.endDate]
    });
  }

  update() {
    // Logique pour mettre à jour le contrat
    console.log(this.contractForm.value);
    // Exemple : appel à un service ou mise à jour directe des données
  }

  private getContractDataById(id: number): any {
    // Ici, vous pouvez simuler la récupération des données du contrat depuis une source de données
    return {
      contractId: id,
      Montant: 1000,
      couverts: '123',
      clauseParticuliers: 'Lorem ipsum',
      modeDePaiement: 'Cash',
      Remarques: 'Some remarks',
      startDate: new Date(),
      endDate: new Date()
    };
  }
}
