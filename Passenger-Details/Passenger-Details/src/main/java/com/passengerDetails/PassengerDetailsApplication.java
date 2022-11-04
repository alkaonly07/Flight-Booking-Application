package com.passengerDetails;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import springfox.documentation.swagger2.annotations.EnableSwagger2;


@SpringBootApplication
@EnableSwagger2

public class PassengerDetailsApplication {

	public static void main(String[] args) {
		SpringApplication.run(PassengerDetailsApplication.class, args);
		//System.out.println("Started");
	}

}
