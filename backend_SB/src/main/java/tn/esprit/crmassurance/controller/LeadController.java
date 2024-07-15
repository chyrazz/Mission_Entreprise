package tn.esprit.crmassurance.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.batch.core.*;

import org.springframework.batch.core.launch.JobLauncher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import tn.esprit.crmassurance.entities.User;
import tn.esprit.crmassurance.services.LeadServiceImpl;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;

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


    @PostMapping("/upload")
    public Object uploadFile(@RequestBody MultipartFile file) throws Exception {

        Path tempFile = Files.createTempFile("data", ".csv");
        file.transferTo(tempFile.toFile());
        // Set the file path in the job parameters

        JobParameters parameters = new JobParametersBuilder()
                .addString("inputFilePath", tempFile.toAbsolutePath().toString())
                .addLong("timestamp", System.currentTimeMillis())
                .toJobParameters();

        // Run the job with the updated parameters
        JobExecution jobExecution = jobLauncher.run(job, parameters);
        // Clean up the temporary
        return jobExecution.getStatus();
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
