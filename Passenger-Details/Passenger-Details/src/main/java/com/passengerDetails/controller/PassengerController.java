package com.passengerDetails.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.passengerDetails.entity.PassengerDetails;
import com.passengerDetails.exception.NoProperDataException;
import com.passengerDetails.exception.PassengerNotFoundException;
import com.passengerDetails.service.PassengerService;
import org.slf4j.Logger;

@RestController
@CrossOrigin(origins="http://localhost:3000") 
@RequestMapping("/api/v2") 
public class PassengerController {
	
	Logger log = LoggerFactory.getLogger(PassengerController.class);
	
	@Autowired
	private PassengerService passengerService;
	
	/*
	 * @Autowired private SequenceGeneratorService sequenceGeneratorService;
	 */
	/*
	 * @PostMapping("/") public PassengerDetails addDetails(@RequestBody
	 * PassengerDetails details) { return this.passengerservice.save(details); }
	 */
	
	@PostMapping("/addPassenger") 
	public ResponseEntity<PassengerDetails> addPassenger(@Valid @RequestBody PassengerDetails passenger)  throws NoProperDataException
	{
		if(passenger!=null) 
		{
			
			//passenger.setId(sequenceGeneratorService.getSequenceNumberForPassenger(PassengerDetails.SEQUENCE_NAME));
			this.passengerService.addPassenger(passenger);
			log.error("added passenger");
			return new ResponseEntity<PassengerDetails>(passenger,HttpStatus.CREATED);
			
		}
		else
		{
			throw new NoProperDataException("Please fill fields");
		}
		
		
	}
	
	
	@GetMapping("/allPassengers") 
	public ResponseEntity<List<PassengerDetails>> getAllPassengers() throws PassengerNotFoundException
	{
		
		List<PassengerDetails> passenger=this.passengerService.getAllPassengers();
		log.info("starting  of get mapping");
	
		if(passenger.size()>0) {
			log.debug("passengers are {}" 
							+ passenger);
		 return new ResponseEntity<List<PassengerDetails>>( passenger,HttpStatus.OK); 
		}
		else {
			log.debug(" no passenger found ");
			 return new  ResponseEntity<List<PassengerDetails>>(passenger,HttpStatus.NO_CONTENT); 
		}
	}
	
	@GetMapping("/getPassenger/{id}")
	public ResponseEntity<PassengerDetails> getPassengerById(@Valid @PathVariable  int id) throws PassengerNotFoundException	
		
		{
			log.info("starting  of get mapping");
			PassengerDetails passenger=passengerService.getPassengerById(id);
		
			if(passenger.getId()!=0) {
				log.debug("Passengers are {}"
						+ passenger);
			 return new  ResponseEntity<PassengerDetails>(passenger,HttpStatus.OK); 
			}
			else {
				log.debug(" no passengers found ");
				 return new  ResponseEntity<PassengerDetails>(passenger,HttpStatus.NOT_FOUND); 
			}
		}
	
	@PutMapping("/updatePassenger/{id}") 
	public ResponseEntity<PassengerDetails> updateDetails(@RequestBody PassengerDetails passenger) throws NoProperDataException { 
		if(passenger!=null) 
		{
			
			this.passengerService.updatePassenger(passenger);
			log.error("Updated passenger");
			return new ResponseEntity<PassengerDetails>(passenger,HttpStatus.CREATED);
			
		}
		else
		{
			throw new NoProperDataException("Please fill fields");
		}
		
	}
	
	@DeleteMapping(path="/deletePassenger/{id}")
	public ResponseEntity<String> deletePassenger(@Valid @PathVariable int id) throws PassengerNotFoundException {
		int count=1;
		for(int i=1;i>=count;count++)
		{
			if(count==1)
			{
			try {
				passengerService.deletePassenger(id);
			} catch (PassengerNotFoundException e) {
				log.error(e.getMessage());
			}
			}
			else
			{
				log.info("id not found");
			}
		}
			return ResponseEntity.ok(" Delete operation done ");

	}

	/*
	 * @PutMapping("/{id}") public PassengerDetails updateDetails(@RequestBody
	 * PassengerDetails details) { return this.passengerservice.save(details); }
	 * 
	 * @DeleteMapping("/{id}") public void deleteDetails(@PathVariable("id") String
	 * id) { this.passengerservice.delete(id); }
	 * 
	 * @GetMapping("/{id}") public Object getDetails(@PathVariable("id") String id )
	 * { return this.passengerservice.getDetailsById(id); }
	 * 
	 * 
	 * @GetMapping("/") public List<PassengerDetails> getDetails() { return
	 * this.passengerservice.findAll(); }
	 * 
	 */
}
