package tn.esprit.crmassurance.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.esprit.crmassurance.entities.*;
import tn.esprit.crmassurance.services.DashboardServiceImp;
import tn.esprit.crmassurance.services.TaskServiceImpl;

import java.util.List;

@RestController
@RequestMapping("/dashboard")
@CrossOrigin(origins = "http://localhost:4200")
public class DashboardController {

    @Autowired
    private DashboardServiceImp dashboardService;
    @Autowired
    private TaskServiceImpl taskService;

    @GetMapping("/totalClients")
    public long getTotalClients() {
        return dashboardService.getTotalClients();
    }

    @GetMapping("/totalLeads")
    public long getTotalLeads() {
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


    @GetMapping("/totalContracts")
    public long getTotalContracts() {
        return dashboardService.getTotalContracts();
    }

    @GetMapping("/terminatedContracts")
    public long getTerminatedContracts() {
        return dashboardService.getTerminatedContracts();
    }

    @GetMapping("/pendingContracts")
    public long getPendingContracts() {
        return dashboardService.getPendingContracts();
    }

    @GetMapping("/totalOpportunities")
    public long getTotalOpportunities() {
        return dashboardService.getTotalOpportunities();
    }


    @GetMapping("/wonOpportunities")
    public long getWonOpportunities() {
        return dashboardService.getWonOpportunities();
    }

    @GetMapping("/rejectedOpportunities")
    public long getRejectedOpportunities() {
        return dashboardService.getRejectedOpportunities();
    }

    @GetMapping("/pendingOpportunities")
    public long getPendingOpportunities() {
        return dashboardService.getPendingOpportunities();
    }

    @GetMapping("/totalRequests")
    public long getTotalRequests() {
        return dashboardService.getTotalRequests();
    }

    @GetMapping("/progressRequests")
    public long getProgressRequests() {
        return dashboardService.getProgressRequests();
    }

    @GetMapping("/escalatedRequests")
    public long getEscalatedRequests() {
        return dashboardService.getEscalatedRequests();
    }

    @GetMapping("/resolvedRequests")
    public long getResolvedRequests() {
        return dashboardService.getResolvedRequests();
    }

    @GetMapping("/distribution")
    public long getRequestsDistribution() {
        return dashboardService.getRequestsDistribution();
    }


    @PostMapping("/addTask")
    public TaskDashboard addTask(@RequestBody TaskDashboard task) {
        TaskDashboard createdTask = taskService.addTask(task);
        return createdTask;
    }

    @GetMapping("/getAll")
    public List<TaskDashboard> getAllTasks() {
        List<TaskDashboard> tasks = taskService.getTasks();
        return tasks;
    }

    @PostMapping("/tasks")
    public TaskDashboard updateTask(@RequestBody TaskDashboard task) {
        TaskDashboard updatedTask = taskService.updateTask(task);
        return updatedTask;

    }

    @DeleteMapping("/tasks/{id}")
    public void deleteTask(@PathVariable Long id) {
        TaskDashboard task = new TaskDashboard();
        task.setId(id);
        taskService.deleteTask(task);
    }

    @GetMapping("/count-by-commercial")
    public long getOpportunitiesByCommercial() {
        return dashboardService.getOpportunitiesByCommercial();
    }

    @GetMapping("/conversion-rate")
    public double getConversionRate() {
        return dashboardService.getConversionRate();
    }

    @GetMapping("/montant")
    public List<Float> getAllContractMontant() {
        return dashboardService.getAllContractMontant();
    }

}

