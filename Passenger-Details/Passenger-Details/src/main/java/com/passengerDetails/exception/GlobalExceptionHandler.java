package com.passengerDetails.exception;

import java.time.LocalDateTime;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {
   
	@ExceptionHandler(value = Exception.class)
	public ResponseEntity<ErrorDetails> handleException(Exception e){
		ErrorDetails errorDetails= new ErrorDetails();
		errorDetails.setErrorMessage(e.getMessage());
		errorDetails.setTimeStamp(LocalDateTime.now());
		return  new ResponseEntity<ErrorDetails>(errorDetails,HttpStatus.NOT_FOUND);
}
}
