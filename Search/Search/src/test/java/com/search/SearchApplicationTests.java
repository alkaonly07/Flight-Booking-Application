package com.search;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import com.search.entity.Flight;
import com.search.repository.FlightRepository;
import com.search.service.SearchService;

@RunWith(SpringRunner.class)
@SpringBootTest
class SearchApplicationTests {

	@Autowired
	private SearchService service;
	
	@MockBean
	private FlightRepository flightrepo;
// test fake data for get all Flight	
	@Test
	public void getFlightTest() {
		when(flightrepo.findAll()).thenReturn(Stream.
				of(new Flight(101, "1234", "Delhi", "Chennai", "2022-03-20")).collect(Collectors.toList()));
		assertEquals(1, service.findAll().size());
	}

	//this is also for get all flight
	@Test
	public void getAllFlightTest() {
		List<Flight> list = new ArrayList<Flight>();
		Flight flight1=new Flight(101, "1234", "Delhi", "Chennai", "2022-03-20");
		Flight flight2=new Flight(102, "5678", "Delhi", "Maharashtra", "2022-03-25");
		Flight flight3=new Flight(103, "9101", "Delhi", "Banglore", "2022-03-30");
		
		
		list.add(flight1);
		list.add(flight2);
		list.add(flight3);
		
		
		when(flightrepo.findAll()).thenReturn(list);
		
		//test
		List<Flight> flightList=service.findAll();
		assertEquals(3, flightList.size());
		verify(flightrepo, times(1)).findAll();
	}
	
//	test for save flight
	@Test
	public void saveTest() {
		Flight flight=new Flight(101, "1234", "Delhi", "Chennai", "2022-03-20");
		when(flightrepo.save(flight)).thenReturn(flight);
		assertEquals(flight, service.save(flight));
	}
	
//	test for delete flight
	@Test
	public void deleteFlightTest() {
		long id=101;
		Flight flight=new Flight(101, "1234", "Delhi", "Chennai", "2022-03-20");
		service.delete(id);
		verify(flightrepo,times(1)).deleteById(id);
	}
	
//	test for get flight by id
//	@Test
//	public void getFlightByIdTest() {
//		when(flightrepo.findById(101))
//		.thenReturn(new Flight(101, "1234", "Delhi", "Chennai", "2022-03-20"));
//		Object flight=service.getFlightById(101);
//		assertEquals("1234", (flight).getFlightNumber());
//		assertEquals("Delhi", ( flight).getOrigin());
//		assertEquals("Chennai", ( flight).getDestination());
//		
//	}
}
