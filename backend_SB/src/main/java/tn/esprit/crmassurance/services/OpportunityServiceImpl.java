package tn.esprit.crmassurance.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.crmassurance.entities.Opportunity;
import tn.esprit.crmassurance.repositories.OpportunityRepository;

import java.util.List;

@Service
public class OpportunityServiceImpl implements IOpportunityService {
    @Autowired
    private OpportunityRepository opportunityRepository;

    @Override
    public Opportunity getOpportunityById(Long id) {
        return opportunityRepository.findById(id).orElse(null);
    }

    @Override
    public List<Opportunity> getAllOpportunities() {
        return opportunityRepository.findAll();
    }

    @Override
    public Opportunity addNewOpportunity(Opportunity opportunity) {
        return opportunityRepository.save(opportunity);
    }

    @Override
    public void updateOpportunity(Opportunity newOpportunity) {
        opportunityRepository.findById(newOpportunity.getId()).ifPresent(opportunity -> {
            opportunity.setOpp_name(newOpportunity.getOpp_name());
            opportunity.setDescription(newOpportunity.getDescription());
            opportunity.setCreatedDate(newOpportunity.getCreatedDate());
            opportunity.setCloseDate(newOpportunity.getCloseDate());
            opportunity.setAttachment(newOpportunity.getAttachment());
            opportunity.setRepresentant(newOpportunity.getRepresentant());
            opportunity.setLead(newOpportunity.getLead());
            opportunityRepository.save(opportunity);
        });
    }
}
