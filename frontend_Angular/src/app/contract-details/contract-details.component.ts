import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contract } from 'app/contract/contract.component';
import { ContractService } from 'app/services/ContractService';



@Component({
  selector: 'app-contract-details',
  templateUrl: './contract-details.component.html',
  styleUrls: ['./contract-details.component.scss']
})
export class ContractDetailsComponent implements OnInit {
  contract: Contract | undefined;
  show: boolean = false;
  statusNotif: string = '';
  messageNotif: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contractService: ContractService
  ) { }

  ngOnInit(): void {
    this.getContractDetails();
  }

  getContractDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.contractService.getContractById(id).subscribe(
        (contract: Contract) => this.contract = contract,
        error => {
          this.showNotification('danger', 'Error fetching contract details');
        }
      );
    }
  }

  goBack(): void {
    this.router.navigate(['/contracts']);
  }

  close(): void {
    this.show = false;
  }

  showNotification(status: string, message: string): void {
    this.statusNotif = status;
    this.messageNotif = message;
    this.show = true;
    setTimeout(() => this.show = false, 3000);
  }
}
