package com.passengerDetails.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@SuppressWarnings("serial")
public class NoProperDataException extends Exception {

	public NoProperDataException(String message) {
		super(message);

	}

	
}