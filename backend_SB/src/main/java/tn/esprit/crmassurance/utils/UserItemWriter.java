package tn.esprit.crmassurance.utils;

import org.apache.tomcat.util.http.fileupload.util.LimitedInputStream;
import org.springframework.batch.core.configuration.annotation.StepScope;
import org.springframework.batch.item.Chunk;
import org.springframework.batch.item.ItemWriter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;
import tn.esprit.crmassurance.entities.User;
import tn.esprit.crmassurance.repositories.LeadRepository;

import java.util.List;

@Component
public class UserItemWriter<U> implements ItemWriter<User> {
    @Autowired
    LeadRepository userRepository;



    @Override
    @StepScope
    public void write(Chunk<? extends User> chunk) throws Exception {
        System.out.println("Data Saved for Users: " + chunk);
        userRepository.saveAll(chunk);
    }
}
