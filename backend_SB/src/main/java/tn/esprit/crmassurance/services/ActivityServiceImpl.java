package tn.esprit.crmassurance.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.crmassurance.entities.Activity;
import tn.esprit.crmassurance.repositories.ActivityRepository;

import java.util.List;

@Service
public class ActivityServiceImpl implements IActivityService{
    @Autowired
    private ActivityRepository ActRepo;
    @Override
    public Activity GetActivityByID(Long id) {
        return ActRepo.findById(id).orElse(null);
    }

    @Override
    public List<Activity> GetAllActivities() {
        return ActRepo.findAll();
    }

    @Override
    public Activity AddNewActivity(Activity l) {
        return ActRepo.save(l);
    }

    @Override
    public void DeleteActivity(Activity act) {
        ActRepo.delete(act);
    }

    @Override
    public void UpdateActivityDetails(Activity newAct) {
        ActRepo.findById(newAct.getId())
                .ifPresent(act1 -> {
                    act1.setInformation(newAct.getInformation());
                    ActRepo.save(act1);
                });
    }


}
