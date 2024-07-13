package tn.esprit.crmassurance.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.crmassurance.entities.ECausesDisqualified;
import tn.esprit.crmassurance.entities.ERole;
import tn.esprit.crmassurance.entities.EUserStatus;
import tn.esprit.crmassurance.services.DashboardServiceImp;
import tn.esprit.crmassurance.services.IDashboardService;

@RestController
@RequestMapping("/dashboard")
@CrossOrigin(origins = "http://localhost:4200")
public class DashboardController {

    @Autowired
    private DashboardServiceImp dashboardService;

    @GetMapping("/totalClients")
    public long getTotalClients(){
        return dashboardService.getTotalClients();
    }

    @GetMapping("/totalLeads")
    public long getTotalLeads(){
        return dashboardService.getTotalLeads();
    }

    @GetMapping("/leadsStatus")
    public long getLeadsByStatus(@RequestParam EUserStatus s) {
        return dashboardService.getLeadsByStatus(s);
    }

    @GetMapping("/clientsMonth/{month}")
    public long getClientsByMonth(@PathVariable int month) {
        return dashboardService.getClientsByMonth(month);
    }

    @GetMapping("/causesDisqualified")
    public long getCauseDisqualified(@RequestParam ECausesDisqualified ed) {
        return dashboardService.getCauseDisqualified(ed);
    }
}

