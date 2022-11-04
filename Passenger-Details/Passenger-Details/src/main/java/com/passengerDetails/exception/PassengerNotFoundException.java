package com.passengerDetails.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@SuppressWarnings("serial")
@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class PassengerNotFoundException extends Exception {

	public PassengerNotFoundException(String message) {
		super(message);

	}
 
}