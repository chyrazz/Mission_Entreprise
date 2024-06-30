import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { LeadComponent } from 'app/lead/lead.component';
import { ActivityComponent } from 'app/activity/activity.component';
import { ClientComponent } from 'app/client/client.component';
import { OpportunitiesComponent } from 'app/opportunities/opportunities.component';
import { ContractComponent } from 'app/contract/contract.component';
import { RequestComponent } from 'app/request/request.component';
import { UsersComponent } from 'app/users/users.component';
import { AddActivityComponent } from 'app/add-activity/add-activity.component';
import { LeadDetailsComponent } from 'app/lead-details/lead-details.component';


export const AdminLayoutRoutes: Routes = [
  
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'lead',  component: LeadComponent },
    { path: 'client',  component: ClientComponent },
    { path: 'activity',  component: ActivityComponent },
    { path: 'request',  component: RequestComponent },
    { path: 'contract',  component: ContractComponent },
    { path: 'users',  component: UsersComponent },  
    { path: 'opportunities',  component: OpportunitiesComponent },
    { path: 'add-activity',  component: AddActivityComponent },
    { path: 'detail-lead',  component: LeadDetailsComponent },
];
