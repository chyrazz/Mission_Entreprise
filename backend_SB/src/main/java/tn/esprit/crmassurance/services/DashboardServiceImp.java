package tn.esprit.crmassurance.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.crmassurance.entities.*;
import tn.esprit.crmassurance.repositories.*;

import java.util.List;

@Service
public class DashboardServiceImp implements IDashboardService{


    @Autowired
    private ContractRepository contractRepository;
    @Autowired
    private CustomerRequestRepository customerRequestRepository;
    @Autowired
    private OpporunityRepository opporunityRepository;
    @Autowired
    private LeadRepository leadRepository;


    //Dashboard Clients
    @Override
    public long getTotalClients() {
        return this.leadRepository.countByRole(ERole.Client);
    }

    @Override
    public long getTotalLeads() {
        return this.leadRepository.countByRole(ERole.Lead);
    }

    @Override
    public double getConversionRate() {
        long totalLeads = leadRepository.countTotalLeads();
        if (totalLeads == 0) {
            return 0.0;
        }
        long convertedClients = leadRepository.countConvertedClients();
        return (double) convertedClients / totalLeads * 100;
    }

    @Override
    public long getLeadsByStatus(EUserStatus s) {
        return this.leadRepository.countByRoleAndStatus(ERole.Lead, s);
    }

    @Override
    public long getClientsByMonth(int month) {
        return 0;
    }

    @Override
    public long getCauseDisqualified(ECausesDisqualified ed) {
        return this.leadRepository.countByRoleAndStatusAndCause(ERole.Lead, EUserStatus.Disqualified, ed);
    }


    //Dashboard Contracts
    @Override
    public long getTotalContracts() {
        return this.contractRepository.count();
    }

    @Override
    public long getTerminatedContracts() {
        return this.contractRepository.countTerminatedContracts();
    }

    @Override
    public long getPendingContracts() {
        return this.contractRepository.countPendingContracts();
    }

    @Override
    public long getTotalOpportunities() {
        return this.opporunityRepository.count();
    }

    @Override
    public long getWonOpportunities() {
        return this.opporunityRepository.countByOpp(ETypeOpportunity.won_opportunity);
    }

    @Override
    public long getRejectedOpportunities() {
        return this.opporunityRepository.countByOpp(ETypeOpportunity.rejected_opportunity);
    }

    @Override
    public long getPendingOpportunities() {
        return this.opporunityRepository.countByOpp(ETypeOpportunity.pending_opportunity);
    }

    @Override
    public long getOpportunitiesByCommercial() {
        return this.opporunityRepository.countOpportunitiesByCommercial();
    }

    @Override
    public List<Float> getAllContractMontant() {
        return this.contractRepository.findAllMontant();
    }

    //Dashboard Support

    @Override
    public long getTotalRequests() {
        return this.customerRequestRepository.count();
    }

    @Override
    public long getProgressRequests() {
        return this.customerRequestRepository.countByStatus(ERequestStatus.In_progress);
    }

    @Override
    public long getEscalatedRequests() {
        return this.customerRequestRepository.countByStatus(ERequestStatus.Escalated);
    }

    @Override
    public long getResolvedRequests() {
        return this.customerRequestRepository.countByStatus(ERequestStatus.Resolved);
    }


    public long getRequestsDistribution() {
        long incidentCount = customerRequestRepository.countByType(ETypeRequest.Incident);
        long informationCount = customerRequestRepository.countByType(ETypeRequest.Information);
        long claimCount = customerRequestRepository.countByType(ETypeRequest.Claim);

        return incidentCount + informationCount + claimCount;
    }



}