package tn.esprit.crmassurance.services;


import tn.esprit.crmassurance.entities.Activity;

import java.util.List;

public interface IActivityService {
    public Activity GetActivityByID(Long id);
    public List<Activity> GetAllActivities();
    public Activity AddNewActivity(Activity l);
    public void DeleteActivity(Activity act);
    public void UpdateActivityDetails(Activity newAct);
}
