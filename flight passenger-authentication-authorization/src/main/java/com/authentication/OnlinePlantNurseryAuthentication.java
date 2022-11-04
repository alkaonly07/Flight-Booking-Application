package com.authentication;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class OnlinePlantNurseryAuthentication {

	public static void main(String[] args) {
		SpringApplication.run(OnlinePlantNurseryAuthentication.class, args);
	}

}
