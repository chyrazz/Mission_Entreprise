package tn.esprit.crmassurance.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.crmassurance.entities.EUserStatus;
import tn.esprit.crmassurance.entities.User;
import tn.esprit.crmassurance.repositories.LeadRepository;

import java.util.List;

@Service
public class LeadServiceImpl implements ILeadService{
    @Autowired
    private LeadRepository leadRepo;
    @Override
    public User GetLeadByID(Long id) {
        return leadRepo.findById(id).orElse(null);
    }

    @Override
    public List<User> GetAllLeads() {
        return leadRepo.findAll();
    }


    @Override
    public User AddNewLead(User l) {
        return leadRepo.save(l);
    }

    @Override
    public void DeleteLead(User u) {
        leadRepo.delete(u);
    }

    @Override
    public void UpdateLeadDetails(User newLead) {
         leadRepo.findById(newLead.getId())
                .ifPresent(user1 -> {
                    user1.setName(newLead.getName());
                    user1.setLastName(newLead.getLastName());
                    user1.setEmail(newLead.getEmail());
                    user1.setPhoneNumber1(newLead.getPhoneNumber1());
                    user1.setPhoneNumber2(newLead.getPhoneNumber2());
                    user1.setAdress(newLead.getAdress());
                    user1.setStatus(newLead.getStatus());

                    leadRepo.save(user1);
                });
    }
}
