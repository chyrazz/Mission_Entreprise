import { Pipe, PipeTransform } from '@angular/core';
import { OpportunityStatus } from './opportunity-list-models';

@Pipe({
  name: 'opportunityStatus',
  standalone: false
})
export class OpportunityStatusPipe implements PipeTransform {

  transform(value: OpportunityStatus): string {
    return OpportunityStatusPipeOrchestration[value];
  }

}

const OpportunityStatusPipeOrchestration : {[key in OpportunityStatus]: string } = 
{
  accepted: "Acceptée", 
  declined: "Rejetée", 
  pending: "En attente"
}