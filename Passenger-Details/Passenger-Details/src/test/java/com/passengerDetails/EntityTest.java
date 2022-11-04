package com.passengerDetails;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import com.passengerDetails.entity.PassengerDetails;

class EntityTest {

	PassengerDetails  p1;
	@BeforeEach
	public void before() {
		p1=new PassengerDetails(300, "rajeevK","Rajeev", "Kumar","rajeev@gmail.com", "Male",2);
	}
	
	
	@AfterEach
	public void after() {
		p1=null;
	}
	
	@Test
	void testGetId() {
		assertEquals(300, p1.getId());
	}
	
	@Test
	void testGetUsername() {
		assertEquals("rajeevK", p1.getUsername());
	}


	@Test
	void testGetFirstName() {
		assertEquals("Rajeev", p1.getFirstName());
	}

	@Test
	void testGetLastName() {
		assertEquals("Kumar", p1.getLastName());
	}

	@Test
	void testGetEmail() {
		assertEquals("rajeev@gmail.com", p1.getEmail());
	}
	
	@Test
	void testGetGender() {
		assertEquals("Male", p1.getGender());
	}
	
	@Test
	void testGetNooftickets() {
		assertEquals("2", p1.getNooftickets());
	}

	@Test
	void testSetId() {
		p1.setId(301);
		assertEquals(300, p1.getId());
	}
	
	@Test
	void testSetUsername() {
		p1.setUsername("pihuP");
		assertEquals("pihuP", p1.getUsername());
	}


	@Test
	void testSetFirstName() {
		p1.setFirstName("Pihu");
		assertEquals("Pihu", p1.getFirstName());
	}

	@Test
	void testSetLastName() {
		p1.setLastName("P");
		assertEquals("P", p1.getLastName());
	}

	@Test
	void testSetEmail() {
		p1.setEmail("pihu@gmail.com");
		assertEquals("pihu@gmail.com", p1.getEmail());
	}
	
	@Test
	void testSetGender() {
		p1.setGender("Female");
		assertEquals("Female", p1.getGender());
	}
	
	@Test
	void testSetNooftickets() {
		p1.setNooftickets(1);
		assertEquals("1", p1.getNooftickets());
	}

	
}
