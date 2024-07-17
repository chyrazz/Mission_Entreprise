import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule, MatRippleModule, NativeDateAdapter} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { LeadComponent } from 'app/lead/lead.component';
import { ClientComponent } from 'app/client/client.component';
import { ActivityComponent } from 'app/activity/activity.component';
import { ContractComponent } from 'app/contract/contract.component';
import { RequestComponent } from 'app/request/request.component';
import { OpportunitiesComponent } from 'app/opportunities/opportunities.component';
import { UsersComponent } from 'app/users/users.component';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatBadgeModule} from '@angular/material/badge';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { OpportunityListModule } from 'app/opportunity-list/opportunity-list.module';
import { CsvExportService } from 'app/services/CsvExportService';
import { AddActivityComponent } from 'app/add-activity/add-activity.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { LeadDetailsComponent } from 'app/lead-details/lead-details.component';
import { MatIconModule } from '@angular/material/icon';
import { ContractaddComponent } from 'app/contractadd/contractadd.component';
import { ContractModiyComponent } from 'app/contract-modiy/contract-modiy.component';
import { ContractDetailsComponent } from 'app/contract-details/contract-details.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatMenuModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatTableModule,
    MatDialogModule, 
    MatPaginatorModule,
    MatButtonToggleModule,
    MatCardModule,
    MatChipsModule,
    MatBadgeModule,
    MatSnackBarModule, OpportunityListModule,
    MatSnackBarModule,
    MatIconModule,
    MatDatepickerModule,
    HttpClientModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    LeadComponent,
    ClientComponent,
    ActivityComponent,
    ContractComponent,
    RequestComponent,
    UsersComponent,
    LeadDetailsComponent,
    OpportunitiesComponent,
    AddActivityComponent,
     OpportunitiesComponent,
     ContractaddComponent,
     ContractModiyComponent,
      ContractDetailsComponent,
    
  ],
  providers: [CsvExportService,NativeDateAdapter],

})
export class AdminLayoutModule {}


