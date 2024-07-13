package tn.esprit.crmassurance.utils;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.batch.core.Job;
import org.springframework.batch.core.Step;
import org.springframework.batch.core.configuration.annotation.EnableBatchProcessing;
import org.springframework.batch.core.configuration.annotation.StepScope;
import org.springframework.batch.core.job.builder.JobBuilder;
import org.springframework.batch.core.launch.support.RunIdIncrementer;
import org.springframework.batch.core.repository.JobRepository;
import org.springframework.batch.core.step.builder.StepBuilder;
import org.springframework.batch.item.ItemProcessor;
import org.springframework.batch.item.ItemReader;
import org.springframework.batch.item.ItemWriter;
import org.springframework.batch.item.file.FlatFileItemReader;
import org.springframework.batch.item.file.LineMapper;
import org.springframework.batch.item.file.mapping.BeanWrapperFieldSetMapper;
import org.springframework.batch.item.file.mapping.DefaultLineMapper;
import org.springframework.batch.item.file.transform.DelimitedLineTokenizer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Lazy;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.transaction.PlatformTransactionManager;
import tn.esprit.crmassurance.entities.Role;


@Configuration
@RequiredArgsConstructor
@Slf4j
@EnableBatchProcessing
public class springBatchConfig {

    @Autowired private JobRepository jobRepository;
    @Autowired private PlatformTransactionManager transactionManager;
    @Autowired  @Lazy
    private ItemReader<Role> itemReader;
    @Autowired private ItemWriter<Role> itemWriter;
    @Autowired private ItemProcessor<Role, Role> itemProcessor;


   @Bean
    public Job job() {
        Step step = new StepBuilder("ETL-file-load", jobRepository)
                .<Role, Role>chunk(100,transactionManager)
                .reader(itemReader)
                .processor(itemProcessor)
                .writer(itemWriter)
                .build();

        return new JobBuilder("ETL-data-Load", jobRepository)
                .start(step)
                .build();
    }

    @Bean
    public FlatFileItemReader<Role> FlatFileItemReader (@Value("${inputFile}") Resource resource) {
        FlatFileItemReader<Role> flatFileItemReader = new FlatFileItemReader<>();
        flatFileItemReader.setName("CSV-Reader");
        flatFileItemReader.setLinesToSkip(1);//ligne d'entete
        flatFileItemReader.setResource(resource);
        flatFileItemReader.setLineMapper(lineMapper());
        return flatFileItemReader;
    }

    @Bean
    public LineMapper<Role> lineMapper() {
        //DefaultLineMapper:  is a class provided by the Spring Batch framework that is used for
        // mapping lines of input data to domain objects.
        DefaultLineMapper<Role> defaultLineMapper = new DefaultLineMapper<>();
        DelimitedLineTokenizer lineTokenizer = new DelimitedLineTokenizer();
        lineTokenizer.setDelimiter(",");
        lineTokenizer.setStrict(false);
        lineTokenizer.setNames("RoleId", "name");
        //BeanWrapperFieldSetMapper  is used for mapping fields from a delimited or fixed-length file (typically a flat file)
        // to a Java object.
        BeanWrapperFieldSetMapper<Role> fieldSetMapper = new BeanWrapperFieldSetMapper<>();
        fieldSetMapper.setTargetType(Role.class);
        defaultLineMapper.setLineTokenizer(lineTokenizer);
        defaultLineMapper.setFieldSetMapper(fieldSetMapper);
        return defaultLineMapper;
    }

}
