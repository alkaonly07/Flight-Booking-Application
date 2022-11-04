package com.passengerDetails.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.passengerDetails.entity.PassengerDetails;
import com.passengerDetails.exception.NoProperDataException;
import com.passengerDetails.exception.PassengerNotFoundException;
import com.passengerDetails.repository.PassengerRepository;

@Service

public class PassengerService {
	
Logger log = LoggerFactory.getLogger(PassengerService.class);

	
	@Autowired
	private PassengerRepository passengerRepository;

	public List<PassengerDetails> getAllPassengers() {
		log.info("get all passengers");
		return passengerRepository.findAll();
	}

	/*
	 * public PassengerDetails getPassengerById(int id) throws
	 * PassengerNotFoundException { PassengerDetails passenger=new
	 * PassengerDetails(); if(passenger!=null) { passengerRepository.findById(id);
	 * log.debug("passengers getbyid {}",passenger); } else { throw new
	 * PassengerNotFoundException("Passenger Not Found"+id); }
	 * 
	 * return passenger; }
	 */
	public PassengerDetails addPassenger(PassengerDetails passenger) throws NoProperDataException {
		if(passenger!=null) 
		{
			passengerRepository.save(passenger);
			log.debug("customer added {}",passenger);
			
		}
		else
		{
			throw new NoProperDataException("Please fill fields");
		}
		return passenger;
	}
	
	public PassengerDetails updatePassenger(PassengerDetails passenger) throws NoProperDataException {
		if(passenger!=null) 
		{
			passengerRepository.save(passenger);
			log.debug("customer updated {}",passenger);
			
		}
		else
		{
			throw new NoProperDataException("Please fill fields");
		}
		return passenger;
	}
	
	

	public  PassengerDetails getPassengerById(int id) throws PassengerNotFoundException {
		PassengerDetails passenger=passengerRepository.findById(id);
		if(passenger == null) {
			throw new PassengerNotFoundException("Id not available");
		}
		log.debug("Passenger getbyid {}",passenger);
		return passenger;
	}
	
	public String deletePassenger(Integer id) throws PassengerNotFoundException {
		log.info("Start delete");
		var isRemoved =passengerRepository.findById(id);
		if(isRemoved.isPresent())
		{
			passengerRepository.deleteById(id);
			log.debug("deleted successfully {}",isRemoved.get());
		}
		else
		{
			throw new PassengerNotFoundException("Id Not Available");
		}
		log.info(" deleted End");
		return " deleted successfully";
	}

}
