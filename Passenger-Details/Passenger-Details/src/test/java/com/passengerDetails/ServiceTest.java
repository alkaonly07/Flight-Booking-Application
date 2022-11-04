package com.passengerDetails;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;

import com.passengerDetails.entity.PassengerDetails;
import com.passengerDetails.exception.NoProperDataException;
import com.passengerDetails.exception.PassengerNotFoundException;
import com.passengerDetails.repository.PassengerRepository;
import com.passengerDetails.service.PassengerService;


@SpringBootTest
@AutoConfigureMockMvc
public class ServiceTest {

	
	@InjectMocks
	private PassengerService service;
	
	@Mock
	private PassengerRepository repository;
	
	@Test
	void testServiceNotNull() {
		assertThat(service).isNotNull();
	}
	
	@Test
	void testRepositoryNotNull() {
		assertThat(repository).isNotNull();
	}
	
	@Test
	void testGetAllPassengers() {
		PassengerDetails p1=new PassengerDetails(300, "rajeevK","Rajeev", "Kumar","rajeev@gmail.com", "Male",2);
		PassengerDetails p2=new PassengerDetails(301, "pihuP","Pihu", "P","pihu@gmail.com", "Female",1);
		List<PassengerDetails> passengerList=new ArrayList<PassengerDetails>();
		passengerList.add(p1);
		passengerList.add(p2);
		when(repository.findAll()).thenReturn(passengerList);
		assertEquals(passengerList,service.getAllPassengers());
		
	}
	
	@Test
	void testGetPassengersById() throws PassengerNotFoundException {
		PassengerDetails p1=new PassengerDetails(300, "rajeevK","Rajeev", "Kumar","rajeev@gmail.com", "Male",2);
		when(repository.findById(300)).thenReturn(p1);
		assertEquals(p1,service.getPassengerById(300));
	}
	
	@Test
	void testGetPassengerByInvalidId() throws PassengerNotFoundException {
		PassengerDetails p1=new PassengerDetails(300, "rajeevK","Rajeev", "Kumar","rajeev@gmail.com", "Male",2);
		when(repository.findById(300)).thenReturn(p1);
		try {
			assertThat(service.getPassengerById(1)).as("Passenger with the id 1 doesn't exist");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	@Test
	void testAddPassenger() throws NoProperDataException {
		PassengerDetails p1=new PassengerDetails(300, "rajeevK","Rajeev", "Kumar","rajeev@gmail.com", "Male",2);
		((List<PassengerDetails>) assertThat(service.addPassenger(p1)))
		.contains("customer added");
	
	}	
	@Test
	void testAddPassengerAlreadyExists() throws PassengerNotFoundException {
		PassengerDetails p1=new PassengerDetails(300, "rajeevK","Rajeev", "Kumar","rajeev@gmail.com", "Male",2);
		when(repository.findById(300)).thenReturn(p1);
	try {
		((List<PassengerDetails>) assertThat(service.addPassenger(p1)))
		.contains("Passenger with the id "+p1.getId()+" already exist");
	}catch(Exception e) {
		
	}
	}
	
	@Test
	void testupdatePassenger() throws  NoProperDataException {
		PassengerDetails p1=new PassengerDetails(300, "rajeevK","Rajeev", "Kumar","rajeev@gmail.com", "Male",2);
		when(repository.findById(300)).thenReturn(p1);
		((List<PassengerDetails>) assertThat(service.updatePassenger(p1)))
		.contains("updated successfully....");
	
	}
	
	@Test
	void testupdateProductDoesnotExists() throws PassengerNotFoundException {
		PassengerDetails p1=new PassengerDetails(300, "rajeevK","Rajeev", "Kumar","rajeev@gmail.com", "Male",2);
		when(repository.findById(10)).thenReturn(p1);
	try {
		((List<PassengerDetails>) assertThat(service.updatePassenger(p1)))
		.contains("Product with the id "+p1.getId()+" doesn't exist for update");
	}catch(Exception e) {
		
	}
	}
	
	@Test
	void testDeletePassengerById() throws PassengerNotFoundException {
		PassengerDetails p1=new PassengerDetails(300, "rajeevK","Rajeev", "Kumar","rajeev@gmail.com", "Male",2);
		when(repository.findById(300)).thenReturn(p1);
		assertThat(service.deletePassenger(300))
		.contains("deleted successfully....");
	}
	
	@Test
	void testDeletePassengerByInvalidId() throws PassengerNotFoundException {
		PassengerDetails p1=new PassengerDetails(300, "rajeevK","Rajeev", "Kumar","rajeev@gmail.com", "Male",2);
		when(repository.findById(300)).thenReturn(p1);
		try {
			assertThat(service.deletePassenger(111))
			.contains("Passenger with the id "+p1.getId()+" doesn't exist");
		}catch(Exception e) {
			
		}
	}
	
	
	}
