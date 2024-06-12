package tn.esprit.crmassurance.services;

import tn.esprit.crmassurance.entities.Opportunity;

import java.util.List;

public interface IOpportunityService {
    Opportunity getOpportunityById(Long id);

    List<Opportunity> getAllOpportunities();

    Opportunity addNewOpportunity(Opportunity opportunity);

    void updateOpportunity(Opportunity newOpportunity);
}
