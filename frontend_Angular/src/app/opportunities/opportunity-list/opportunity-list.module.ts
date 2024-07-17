import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { OpportunityListComponent } from "./opportunity-list.component";
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule, MatOptionModule } from "@angular/material/core";
import { MatSelectModule } from "@angular/material/select";
import { MatTooltipModule } from "@angular/material/tooltip";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { OpportunityStatusPipe } from "./opportunity-status.pipe";
import { AddOpportunityComponent } from "../add-opportunity/add-opportunity.component";
import { OpportunityFiltersComponent } from "../opportunity-filters/opportunity-filters.component";
import { UserOpportunityListComponent } from "../user-opportunity-list/user-opportunity-list.component";



@NgModule({
  declarations: [UserOpportunityListComponent,OpportunityListComponent, AddOpportunityComponent, OpportunityFiltersComponent, OpportunityStatusPipe],
  imports: [CommonModule,ReactiveFormsModule,FormsModule, MatCardModule, MatIconModule, MatDialogModule,MatTooltipModule, MatButtonModule, MatFormFieldModule, MatInputModule,MatDatepickerModule, MatNativeDateModule, MatSelectModule, MatOptionModule,  MatProgressSpinnerModule],
  exports: [OpportunityListComponent, UserOpportunityListComponent],
})
export class OpportunityListModule {}
