package com.search.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.search.entity.Flight;
import com.search.repository.FlightRepository;
@Service
public class SearchService {

	@Autowired
	private FlightRepository flightrepo;
	
	public Flight addFlight(Flight flight) {
		Flight flights = new Flight();
				return flightrepo.save(flight);
	}

	public Flight save(Flight flight) {
		return flightrepo.save(flight);
	}

	public void delete(long id) {
		flightrepo.deleteById(id);
	}

	public List<Flight> findAll() {
		System.out.println("Getting data from DB :" + flightrepo.findAll());
		return flightrepo.findAll();
	}

	public Object getFlightById(long id) {
		return flightrepo.findById(id);
	}
}
