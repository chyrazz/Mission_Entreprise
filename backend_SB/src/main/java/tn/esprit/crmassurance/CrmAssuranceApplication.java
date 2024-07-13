package tn.esprit.crmassurance;

import org.springframework.batch.core.configuration.annotation.EnableBatchProcessing;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.context.annotation.Import;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
@EnableBatchProcessing
@EnableAspectJAutoProxy
public class CrmAssuranceApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrmAssuranceApplication.class, args);
	}

}
