package tn.esprit.crmassurance.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.crmassurance.entities.*;
import tn.esprit.crmassurance.repositories.ContractRepository;
import tn.esprit.crmassurance.repositories.CustomerRequestRepository;
import tn.esprit.crmassurance.repositories.LeadRepository;
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
    @Autowired
    private LeadRepository leadRepository;


    @Override
    public long getTotalClients() {
        return this.leadRepository.countByRole(ERole.Client);
    }

    @Override
    public long getTotalLeads() {
        return this.leadRepository.countByRole(ERole.Lead);
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
}