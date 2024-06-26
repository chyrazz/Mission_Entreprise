package tn.esprit.crmassurance.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.crmassurance.entities.*;
import tn.esprit.crmassurance.repositories.ContractRepository;
import tn.esprit.crmassurance.repositories.CustomerRequestRepository;
import tn.esprit.crmassurance.repositories.OpporunityRepository;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;

@Service
public class DashboardServiceImp implements IDashboardService{

    @Autowired
    private ContractRepository contractRepository;
    @Autowired
    private CustomerRequestRepository customerRequestRepository;
    @Autowired
    private OpporunityRepository opporunityRepository;

    @Override
    public int getTotalContrats() {
        return contractRepository.findAll().size();
    }
/*
    @Override
    public int getContratsResilies() {
        LocalDate startDate = LocalDate.of(LocalDate.now().getYear(), 1, 1);
        LocalDate endDate = LocalDate.now();
        List<Contract> contracts = contractRepository.findByEndDateBetween(java.sql.Date.valueOf(startDate), java.sql.Date.valueOf(endDate));
        return contracts.size();
    }

    @Override
    public int getContratsRenouveles() {
        LocalDate startDate = LocalDate.of(LocalDate.now().getYear(), 1, 1);
        LocalDate endDate = LocalDate.now();
        List<Contract> contracts = contractRepository.findByEndDateBetween(java.sql.Date.valueOf(startDate), java.sql.Date.valueOf(endDate));
        return contracts.size();
    }

    @Override
    public int getContratsCreatedByMonth() {
        LocalDate startDate = LocalDate.now().withDayOfMonth(1);
        LocalDate endDate = LocalDate.now().plusMonths(1).withDayOfMonth(1).minusDays(1);
        List<Contract> contracts = contractRepository.findByStartDateBetween(java.sql.Date.valueOf(startDate), java.sql.Date.valueOf(endDate));
        return contracts.size();
    }
*/

    @Override
    public int getRequestInProgress() {
        List<CustomerRequest> requestsInProgress = customerRequestRepository.findByStatus(ERequestStatus.In_progress);
        return requestsInProgress.size();
    }

    @Override
    public int getRequestEscalated() {
        List<CustomerRequest> requestsEscalated = customerRequestRepository.findByStatus(ERequestStatus.Escalated);
        return requestsEscalated.size();
    }

    @Override
    public int getRequestResolved() {
        List<CustomerRequest> requestsResolved = customerRequestRepository.findByStatus(ERequestStatus.Resolved);
        return requestsResolved.size();
    }

    @Override
    public int getRequestSuspended() {
        List<CustomerRequest> requestsSuspended = customerRequestRepository.findByStatus(ERequestStatus.Suspended);
        return requestsSuspended.size();
    }

    @Override
    public int getRequestOpen() {
        List<CustomerRequest> requestsOpen = customerRequestRepository.findByStatus(ERequestStatus.open);
        return requestsOpen.size();
    }

    @Override
    public int getTicketsHandled() {
        List<CustomerRequest> ticketsHandled = customerRequestRepository.findByTypeIn(Arrays.asList(ETypeRequest.Claim, ETypeRequest.Incident));
        return ticketsHandled.size();
    }
/*
    @Override
    public int getContractsHandledByCommercial() {
        List<Contract> contractsHandled = contractRepository.findByRepresentantCommercial();
        return contractsHandled.size();
    }
*/
    @Override
    public int getOpportunitiesHandled() {
        List<Opportunity> opportunitiesHandled = opporunityRepository.findAll();
        return opportunitiesHandled.size();
    }
}