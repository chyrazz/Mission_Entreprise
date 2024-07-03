package tn.esprit.crmassurance.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import tn.esprit.crmassurance.entities.User;
import tn.esprit.crmassurance.services.LeadServiceImpl;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/Lead")
public class LeadController {
    @Autowired
    private LeadServiceImpl leadService;

    @GetMapping("/Getlead/{id}")
    public User GetLeadByID(@PathVariable Long id)
    {
        return leadService.GetLeadByID(id);
    }

    @GetMapping("/Getlead")
    public List<User> GetLeads()
    {
        return leadService.GetAllLeads();
    }

    @GetMapping("/Getclients")
    public List<User> GetClients()
    {
        return leadService.GetAllClients();
    }

    @PostMapping("/addlead")
    public User AddLead(@RequestBody User newLead)
    {
        return leadService.AddNewLead(newLead);
    }
    @PostMapping("/editlead")
    public void updateLead(@RequestBody User newLead)
    {
         leadService.UpdateLeadDetails(newLead);
    }

    @DeleteMapping("/deletelead")
    public void DeleteLead(@RequestBody User u)
    {
        leadService.DeleteLead(u);
    }


}
