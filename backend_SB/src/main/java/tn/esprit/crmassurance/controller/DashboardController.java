package tn.esprit.crmassurance.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tn.esprit.crmassurance.services.IDashboardService;

@RestController
@RequestMapping("/dashboard")
@CrossOrigin(origins = "http://localhost:4200")
public class DashboardController {

    @Autowired
    private IDashboardService dashboardService;

    @GetMapping("/total-contrats")
    public ResponseEntity<Integer> getTotalContrats() {
        int totalContrats = dashboardService.getTotalContrats();
        return ResponseEntity.ok(totalContrats);
    }
/*
    @GetMapping("/contrats-resilies")
    public ResponseEntity<Integer> getContratsResilies() {
        int contratsResilies = dashboardService.getContratsResilies();
        return ResponseEntity.ok(contratsResilies);
    }

    @GetMapping("/contrats-renouveles")
    public ResponseEntity<Integer> getContratsRenouveles() {
        int contratsRenouveles = dashboardService.getContratsRenouveles();
        return ResponseEntity.ok(contratsRenouveles);
    }

    @GetMapping("/contrats-created-by-month")
    public ResponseEntity<Integer> getContratsCreatedByMonth() {
        int contratsCreatedByMonth = dashboardService.getContratsCreatedByMonth();
        return ResponseEntity.ok(contratsCreatedByMonth);
    }
*/
    @GetMapping("/requests-in-progress")
    public ResponseEntity<Integer> getRequestInProgress() {
        int requestsInProgress = dashboardService.getRequestInProgress();
        return ResponseEntity.ok(requestsInProgress);
    }

    @GetMapping("/requests-escalated")
    public ResponseEntity<Integer> getRequestEscalated() {
        int requestsEscalated = dashboardService.getRequestEscalated();
        return ResponseEntity.ok(requestsEscalated);
    }

    @GetMapping("/requests-resolved")
    public ResponseEntity<Integer> getRequestResolved() {
        int requestsResolved = dashboardService.getRequestResolved();
        return ResponseEntity.ok(requestsResolved);
    }

    @GetMapping("/requests-suspended")
    public ResponseEntity<Integer> getRequestSuspended() {
        int requestsSuspended = dashboardService.getRequestSuspended();
        return ResponseEntity.ok(requestsSuspended);
    }

    @GetMapping("/requests-open")
    public ResponseEntity<Integer> getRequestOpen() {
        int requestsOpen = dashboardService.getRequestOpen();
        return ResponseEntity.ok(requestsOpen);
    }

    @GetMapping("/tickets-handled")
    public ResponseEntity<Integer> getTicketsHandled() {
        int ticketsHandled = dashboardService.getTicketsHandled();
        return ResponseEntity.ok(ticketsHandled);
    }
/*
    @GetMapping("/contracts-handled-commercial")
    public ResponseEntity<Integer> getContractsHandledByCommercial() {
        int contractsHandledByCommercial = dashboardService.getContractsHandledByCommercial();
        return ResponseEntity.ok(contractsHandledByCommercial);
    }
*/
    @GetMapping("/opportunities-handled")
    public ResponseEntity<Integer> getOpportunitiesHandled() {
        int opportunitiesHandled = dashboardService.getOpportunitiesHandled();
        return ResponseEntity.ok(opportunitiesHandled);
    }
}
