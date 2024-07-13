package tn.esprit.crmassurance.utils;

import org.springframework.batch.item.ItemProcessor;
import org.springframework.stereotype.Component;
import tn.esprit.crmassurance.entities.Role;
import tn.esprit.crmassurance.entities.User;
@Component
public class UserItemProcessor implements ItemProcessor<Role,Role> {

    @Override
    public Role process(Role item) throws Exception {
        return null;
    }
}
