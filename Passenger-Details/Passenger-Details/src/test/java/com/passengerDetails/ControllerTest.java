package com.passengerDetails;

import static org.hamcrest.Matchers.hasSize;
import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.passengerDetails.entity.PassengerDetails;
import com.passengerDetails.service.PassengerService;

@SpringBootTest
@AutoConfigureMockMvc
public class ControllerTest {

	@MockBean
	private PassengerService service;
	
	@Autowired
	MockMvc mockMvc;
	
	
	@Test
	void testServiceNotNull() {
		assertThat(service).isNotNull();
	}
	
	@Test
	void testMockMvcNotNull() {
		assertThat(mockMvc).isNotNull();
	}
	
	
	@Test
	void testShowPassenger() throws Exception {
		PassengerDetails p1=new PassengerDetails(300, "rajeevK","Rajeev", "Kumar","rajeev@gmail.com", "Male",2);
		PassengerDetails p2=new PassengerDetails(301, "pihuP","Pihu", "P","pihu@gmail.com", "Female",1);
		List<PassengerDetails> passengerList=new ArrayList<PassengerDetails>();
		passengerList.add(p1);
		passengerList.add(p2);
		when(service.getAllPassengers()).thenReturn(passengerList);
	mockMvc.perform(get("/passenger/"))
	.andExpect(status().isOk())
	.andExpect(content().contentType("application/json"))
	.andExpect(jsonPath("$[*]", hasSize(2)))
	.andExpect(jsonPath("$[0].id").value(300))
	.andExpect(jsonPath("$[0].username").value("rajeevK"))
	.andExpect(jsonPath("$[0].firstName").value("rajeev"))
	.andExpect(jsonPath("$[0].lastName").value("Kumar"))
	.andExpect(jsonPath("$[0].email").value("rajeev@gmail.com"))
	.andExpect(jsonPath("$[0].gender").value("Male"))
	.andExpect(jsonPath("$[0].nooftickets").value(2));
		
	}
	
	@Test
	void testShowPassengerById() throws Exception {
		PassengerDetails p1=new PassengerDetails(300, "rajeevK","Rajeev", "Kumar","rajeev@gmail.com", "Male",2);
	when(service.getPassengerById(101)).thenReturn(p1);
	mockMvc.perform(get("/api/v2/getPassenger/300"))
	.andExpect(status().isOk())
	.andExpect(content().contentType("application/json"))
	.andExpect(jsonPath("$.id").value(300))
	.andExpect(jsonPath("$.username").value("rajeevK"))
	.andExpect(jsonPath("$.firstName").value("rajeev"))
	.andExpect(jsonPath("$.lastName").value("Kumar"))
	.andExpect(jsonPath("$.email").value("rajeev@gmail.com"))
	.andExpect(jsonPath("$.gender").value("Male"))
	.andExpect(jsonPath("$.nooftickets").value(2));
		
	}
	
	
	@Test
	void testShowPassengerInvalidId() throws Exception {
		PassengerDetails p1=new PassengerDetails(300, "rajeevK","Rajeev", "Kumar","rajeev@gmail.com", "Male",2);
	when(service.getPassengerById(300)).thenReturn(p1);
	MvcResult result=mockMvc.perform(get("/api/v2/getPassenger/1"))
	.andExpect(status().isOk())
	.andReturn();
	assertThat(result.getResponse().toString())
	.as("Passenger with the id 1 doesn't exist");
		
	}
	
	
	@Test
	void testDeletePassengerById() throws Exception {
		new PassengerDetails(300, "rajeevK","Rajeev", "Kumar","rajeev@gmail.com", "Male",2);
		String s="deleted successfully....";
	when(service.deletePassenger(300)).thenReturn(s);
	mockMvc.perform(delete("/api/v2/deletePassenger/300"))
	.andExpect(status().isOk())
	.andExpect(content().string(s));	
	}
	
	@Test
	void testdeletePassengerInvalidId() throws Exception {
		new PassengerDetails(300, "rajeevK","Rajeev", "Kumar","rajeev@gmail.com", "Male",2);
		String s="deleted successfully....";
		when(service.deletePassenger(300)).thenReturn(s);
	MvcResult result=mockMvc.perform(delete("/api/v2/deletePassenger/11"))
	.andExpect(status().isOk())
	.andReturn();
	assertThat(result.getResponse().toString())
	.as("Passenger with the id 1 doesn't exist");
		
	}
	
	@Test
	void testAddPassenger() throws Exception {
		PassengerDetails p1=new PassengerDetails(300, "rajeevK","Rajeev", "Kumar","rajeev@gmail.com", "Male",2);
		String s="added successfully....";
		when(service.addPassenger(p1)).thenReturn(p1);
		
		ObjectMapper mapper=new ObjectMapper();
		mapper.configure(SerializationFeature.WRAP_ROOT_VALUE, false);
		ObjectWriter  writer=mapper.writer().withDefaultPrettyPrinter();
		String reqstr=writer.writeValueAsString(p1);
	mockMvc.perform(post("/api/v2/addPassenger/")
			.contentType("application/json")
			.content(reqstr))
	.andExpect(status().isOk())
	.andExpect(content().string(s));
		
	}
	
	@Test
	void testUpdatePassenger() throws Exception {
		PassengerDetails p1=new PassengerDetails(300, "rajeevK","Rajeev", "Kumar","rajeev@gmail.com", "Male",2);
		String s="updated successfully....";
		when(service.updatePassenger(p1)).thenReturn(p1);
		
		ObjectMapper mapper=new ObjectMapper();
		mapper.configure(SerializationFeature.WRAP_ROOT_VALUE, false);
		ObjectWriter  writer=mapper.writer().withDefaultPrettyPrinter();
		String reqstr=writer.writeValueAsString(p1);
	mockMvc.perform(put("/api/v2/updatePassenger/")
			.contentType("application/json")
			.content(reqstr))
	.andExpect(status().isOk())
	.andExpect(content().string(s));
		
	}
}

