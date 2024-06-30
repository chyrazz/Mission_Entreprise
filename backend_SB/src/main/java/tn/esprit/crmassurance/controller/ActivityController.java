package tn.esprit.crmassurance.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.esprit.crmassurance.entities.Activity;
import tn.esprit.crmassurance.entities.User;
import tn.esprit.crmassurance.services.ActivityServiceImpl;
import tn.esprit.crmassurance.services.LeadServiceImpl;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/Activity")
public class ActivityController {
    @Autowired
    private ActivityServiceImpl activityService;

    @GetMapping("/GetAct/{id}")
    public Activity GetActivityByID(@PathVariable Long id)
    {
        return activityService.GetActivityByID(id);
    }

    @GetMapping("/GetAct")
    public List<Activity> GetActivities()
    {
        return activityService.GetAllActivities();
    }

    @PostMapping("/addAct")
    public Activity AddActivity(@RequestBody Activity newAct)
    {
        return activityService.AddNewActivity(newAct);
    }
    @PostMapping("/editAct")
    public void updateActivity(@RequestBody Activity act)
    {
        activityService.UpdateActivityDetails(act);
    }

    @DeleteMapping("/deleteAct")
    public void DeleteActivity(@RequestBody Activity act)
    {
        activityService.DeleteActivity(act);
    }
}
