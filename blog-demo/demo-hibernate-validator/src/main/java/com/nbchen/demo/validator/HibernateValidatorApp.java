package com.nbchen.demo.validator;

import com.nbchen.demo.validator.config.EnableFormValidator;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@EnableFormValidator
public class HibernateValidatorApp {
    public static void main(String[] args) {
        SpringApplication.run(HibernateValidatorApp.class,args);
    }
}