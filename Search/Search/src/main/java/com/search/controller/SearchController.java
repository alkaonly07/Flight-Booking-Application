package com.search.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

import com.search.entity.Flight;
import com.search.repository.FlightRepository;
import com.search.service.SearchService;
@RestController
@CrossOrigin(origins="http://localhost:3000")
@RequestMapping("/search")
public class SearchController {
	
	
	@Autowired
	private SearchService SearchService;
	
	
	@PostMapping("/")
	public ResponseEntity<Flight> addFlight(@Valid @RequestBody Flight flight){
		Flight createFlightRequest = this.SearchService.addFlight(flight);
		return new ResponseEntity<>(createFlightRequest,HttpStatus.CREATED);
//	public Flight addFlight(@Valid @RequestBody Flight flight) {
//		return new ResponseEntity<>(service.addFlight(flight),HttpStatus.CREATED);
//		return this.service.save(flight);
	}

	
	@PutMapping("/update/{id}")
	public ResponseEntity<Flight> updateRecords(@Valid @RequestBody Flight records, @PathVariable  long id){
			Flight update=this.SearchService.save(records);
			return new ResponseEntity<>(update,HttpStatus.CREATED);
	}
	
	
	
	
//	@PutMapping("/{id}")
//	public Flight updateFlight(@RequestBody Flight flight) {
//		return this.SearchService.save(flight);
//	}

	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> deleteRecords(@Valid @PathVariable long id){
		SearchService.delete(id);
		return ResponseEntity.ok(" Deleted operation done ");
	}
	
	
//	@DeleteMapping("/{id}")
//	public String deleteFlight(@PathVariable long id) {
//		
//		this.SearchService.delete(id);
//		return "user deleted with id : " + id;
//		
////		this.SearchService.delete(id);
//	}
		
	
	@GetMapping("/")
	public ResponseEntity<List<Flight>> getRecords(){
		List<Flight> records=SearchService.findAll();
		return new  ResponseEntity<>(records,HttpStatus.OK);
	}

	
	@GetMapping("/{id}")
	public ResponseEntity<Object> getFlightById(@Valid @PathVariable  long id)
		{
			Object records= SearchService.getFlightById(id);
			 return new  ResponseEntity<>(records,HttpStatus.OK); 
		}
	
	
	
	
//	@GetMapping("/{id}")
//	public ResponseEntity<Flight> getFlight(@PathVariable long id ) {
//	return ResponseEntity.ok(SearchService.getFlightById(id));
//	}
//	
//
//	@GetMapping("/")
//	public ResponseEntity <List<Flight>> getFlight() {
//		return ResponseEntity.ok(SearchService.getFlightById());
//	}
}

