package tn.esprit.crmassurance.utils;

import org.springframework.batch.item.Chunk;
import org.springframework.batch.item.ItemWriter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import tn.esprit.crmassurance.entities.Role;
import tn.esprit.crmassurance.entities.User;
import tn.esprit.crmassurance.entities.test;
import tn.esprit.crmassurance.repositories.LeadRepository;
import tn.esprit.crmassurance.repositories.RoleRepository;

import java.util.List;

@Component
public class UserItemWriter implements ItemWriter<User> {
    @Autowired
    LeadRepository userRepository;


    @Override
    public void write(Chunk<? extends User> chunk) throws Exception {
        System.out.println("Data Saved for Users: " + chunk);
        userRepository.saveAll(chunk);
    }
}
