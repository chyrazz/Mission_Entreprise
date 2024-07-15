package tn.esprit.crmassurance.services;

import org.hibernate.mapping.List;
import tn.esprit.crmassurance.entities.ECausesDisqualified;
import tn.esprit.crmassurance.entities.EUserStatus;
import tn.esprit.crmassurance.entities.TaskDashboard;

import java.util.Date;

public interface IDashboardService {

    //Dashboard Clients
    public long getTotalClients();
    public long getTotalLeads();
    //public int getConversionRate();
    public long getLeadsByStatus(EUserStatus s);
    public long getClientsByMonth(int month);
    public long getCauseDisqualified(ECausesDisqualified ed);


    //Dashboard Contrats
    public long getTotalContracts();
    public long getTerminatedContracts();
    public long getPendingContracts();
    public long getTotalOpportunities();
    public long getWonOpportunities();
    public long getRejectedOpportunities();
    public long getPendingOpportunities();

    public long getOpportunitiesByCommercial();

    //Dashboard Support
    public long getTotalRequests();
    public long getProgressRequests();
    public long getEscalatedRequests();
    public long getResolvedRequests();
    public long getRequestsDistribution();

}
