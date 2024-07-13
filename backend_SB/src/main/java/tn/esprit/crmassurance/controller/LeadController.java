package tn.esprit.crmassurance.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.batch.core.*;

import org.springframework.batch.core.launch.JobLauncher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.web.bind.annotation.*;
import tn.esprit.crmassurance.entities.User;
import tn.esprit.crmassurance.services.LeadServiceImpl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/Lead")
@Slf4j
public class LeadController {
    @Autowired
    private LeadServiceImpl leadService;

        private final JobLauncher jobLauncher;

        private final Job job;
        @Autowired
        public LeadController(JobLauncher jobLauncher, Job job) {
            this.jobLauncher = jobLauncher;
          this.job = job;
        }


        @RequestMapping("/loadData")
       public void load() throws JobExecutionException {
            try {
                Map<String, JobParameter> parametersMap = new HashMap<>();
                parametersMap.put("timestamp", new JobParameter(System.currentTimeMillis()));
                JobParameters jobParameters = new JobParameters("timestamp",parametersMap);
                JobExecution jobExecution = jobLauncher.run(job, jobParameters);
                log.info("{}_{} was completed successfully", job.getName(), jobExecution.getId());
            } catch (Exception e) {
                log.error("Encountered job execution exception!", e);
            }
        }

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
