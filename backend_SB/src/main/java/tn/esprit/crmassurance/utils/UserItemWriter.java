package tn.esprit.crmassurance.utils;

import org.springframework.batch.item.Chunk;
import org.springframework.batch.item.ItemWriter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import tn.esprit.crmassurance.entities.Role;
import tn.esprit.crmassurance.entities.User;
import tn.esprit.crmassurance.repositories.LeadRepository;
import tn.esprit.crmassurance.repositories.RoleRepository;

import java.util.List;

@Component
public class UserItemWriter implements ItemWriter<Role> {
    @Autowired
    RoleRepository userRepository;
    @Override
    public void write(Chunk<? extends Role> items) throws Exception {
        write((List<? extends Role>) items);
    }

    public void write(List<? extends Role> users) throws Exception {
        System.out.println("Data Saved for Users: " + users);
        userRepository.saveAll(users);
    }
}
