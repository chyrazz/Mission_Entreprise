package tn.esprit.crmassurance.utils;

import lombok.extern.slf4j.Slf4j;
import org.springframework.batch.core.*;
import org.springframework.batch.core.configuration.annotation.EnableBatchProcessing;
import org.springframework.batch.core.configuration.annotation.StepScope;
import org.springframework.batch.core.job.builder.JobBuilder;
import org.springframework.batch.core.launch.JobLauncher;
import org.springframework.batch.core.launch.support.RunIdIncrementer;
import org.springframework.batch.core.repository.JobRepository;
import org.springframework.batch.core.step.builder.StepBuilder;
import org.springframework.batch.item.ExecutionContext;
import org.springframework.batch.item.ItemReader;
import org.springframework.batch.item.ItemStreamReader;
import org.springframework.batch.item.file.FlatFileItemReader;
import org.springframework.batch.item.file.LineMapper;
import org.springframework.batch.item.file.mapping.BeanWrapperFieldSetMapper;
import org.springframework.batch.item.file.mapping.DefaultLineMapper;
import org.springframework.batch.item.file.transform.DelimitedLineTokenizer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Lazy;
import org.springframework.core.io.FileSystemResource;
import org.springframework.transaction.PlatformTransactionManager;
import tn.esprit.crmassurance.entities.ERole;
import tn.esprit.crmassurance.entities.User;

import java.beans.PropertyEditor;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;


@Configuration
@Slf4j
@EnableBatchProcessing
public class springBatchConfig {
    private static final SimpleDateFormat format = new SimpleDateFormat("dd-MM-yyyy");



    @Autowired @Lazy private UserItemWriter<User> itemWriter;
    @Autowired @Lazy private UserItemProcessor itemProcessor;

    private final JobLauncher jobLauncher;
    private final JobRepository jobRepository;
    private final PlatformTransactionManager transactionManager;
    private static final int BATCH_SIZE = 1000;

    public springBatchConfig(ItemReader<User> itemReader,JobLauncher jobLauncher, JobRepository jobRepository, PlatformTransactionManager batchTransactionManager) {
        this.jobLauncher = jobLauncher;
        this.jobRepository = jobRepository;
        this.transactionManager = batchTransactionManager;
    }
   @Bean
    public Job job() {
        Step step = new StepBuilder("ETL-file-load", jobRepository)
                .<User, User>chunk(BATCH_SIZE,transactionManager)
                .reader(itemReader(null))
                .processor(itemProcessor)
                .writer(itemWriter)
                .build();

        return new JobBuilder("ETL-data-Load", jobRepository)
                .incrementer(new RunIdIncrementer())
                .start(step)
                .build();
    }

    @Bean
    @StepScope
    public ItemStreamReader<User> itemReader(@Value("#{jobParameters['inputFilePath']}") String inputFilePath) {

        FlatFileItemReader<User> flatFileItemReader = new FlatFileItemReader<>();
        flatFileItemReader.setResource(new FileSystemResource(inputFilePath));
        flatFileItemReader.setName("CSV-Reader");
        flatFileItemReader.setLinesToSkip(1);
        flatFileItemReader.setLineMapper(lineMapper());
        return flatFileItemReader;
    }


    @Bean
    public LineMapper<User> lineMapper() {


        DefaultLineMapper<User> defaultLineMapper = new DefaultLineMapper<>();
        DelimitedLineTokenizer lineTokenizer = new DelimitedLineTokenizer();
        lineTokenizer.setDelimiter(",");
        lineTokenizer.setStrict(false);
        lineTokenizer.setNames("adr","creationdate","email","lastname","name","phone_number1","phone_number2");

        // Date parsing logic has been added
        CustomDateEditor customDateEditor = new CustomDateEditor(format, false);
        HashMap<Class, PropertyEditor> customEditors = new HashMap<>();
        customEditors.put(Date.class, customDateEditor);



        //BeanWrapperFieldSetMapper  is used for mapping fields from a delimited or fixed-length file (typically a flat file)
        // to a Java object.
        BeanWrapperFieldSetMapper<User> fieldSetMapper = new BeanWrapperFieldSetMapper<>();
        fieldSetMapper.setTargetType(User.class);
        fieldSetMapper.setCustomEditors(customEditors);

        defaultLineMapper.setLineTokenizer(lineTokenizer);
        defaultLineMapper.setFieldSetMapper(fieldSetMapper);
        return defaultLineMapper;


    }


}
