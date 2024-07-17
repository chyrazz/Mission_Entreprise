package tn.esprit.crmassurance.services;

import tn.esprit.crmassurance.entities.ECausesDisqualified;
import tn.esprit.crmassurance.entities.EUserStatus;

import java.util.List;

public interface IDashboardService {

    //Dashboard Clients
    public long getTotalClients();
    public long getTotalLeads();
    public double getConversionRate();
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
    public List<Float> getAllContractMontant();

    //Dashboard Support
    public long getTotalRequests();
    public long getProgressRequests();
    public long getEscalatedRequests();
    public long getResolvedRequests();
    public long getRequestsDistribution();

}
