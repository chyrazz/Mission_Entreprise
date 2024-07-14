package tn.esprit.crmassurance.utils;

import org.springframework.batch.item.ItemProcessor;
import org.springframework.stereotype.Component;
import tn.esprit.crmassurance.entities.ERole;
import tn.esprit.crmassurance.entities.Role;
import tn.esprit.crmassurance.entities.User;
import tn.esprit.crmassurance.entities.test;

import java.text.DateFormat;

@Component
public class UserItemProcessor implements ItemProcessor<User,User> {

    @Override
    public User process(User item) throws Exception {
        return  item;
    }
}
