package tn.esprit.crmassurance.services;

import tn.esprit.crmassurance.entities.ECausesDisqualified;
import tn.esprit.crmassurance.entities.EUserStatus;

import java.util.Date;

public interface IDashboardService {

    //Dashboard Clients
    public long getTotalClients();
    public long getTotalLeads();
    //public int getConversionRate();
    public long getLeadsByStatus(EUserStatus s);
    public long getClientsByMonth(int month);
    public long getCauseDisqualified(ECausesDisqualified ed);


}
