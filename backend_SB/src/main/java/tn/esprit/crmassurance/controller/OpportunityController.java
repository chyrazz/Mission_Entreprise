package tn.esprit.crmassurance.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.esprit.crmassurance.entities.Opportunity;
import tn.esprit.crmassurance.services.OpportunityServiceImpl;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/Opportunity")
public class OpportunityController {
    @Autowired
    private OpportunityServiceImpl opportunityService;

    @GetMapping("/GetOpportunity/{id}")
    public Opportunity getOpportunityById(@PathVariable Long id) {
        return opportunityService.getOpportunityById(id);
    }

    @GetMapping("/GetOpportunities")
    public List<Opportunity> getAllOpportunities() {
        return opportunityService.getAllOpportunities();
    }

    @PostMapping("/AddOpportunity")
    public Opportunity addNewOpportunity(@RequestBody Opportunity opportunity) {
        return opportunityService.addNewOpportunity(opportunity);
    }

    @PostMapping("/UpdateOpportunity")
    public void updateOpportunity(@RequestBody Opportunity opportunity) {
        opportunityService.updateOpportunity(opportunity);
    }
}
