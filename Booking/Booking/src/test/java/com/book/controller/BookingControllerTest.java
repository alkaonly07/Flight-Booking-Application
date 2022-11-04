package com.book.controller;


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

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import com.book.entity.BookingRecord;
import com.book.service.BookServiceImp;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.fasterxml.jackson.databind.SerializationFeature;

@SpringBootTest
@AutoConfigureMockMvc
public class BookingControllerTest {

	@MockBean
	private BookServiceImp service;
	
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
	void testShowProducts() throws Exception {
		BookingRecord p1=new BookingRecord("1","101", "LKO", "BLR", "20-09-2022", "18-09-2022");
		BookingRecord p2=new BookingRecord("2","102", "GOA", "LKO", "20-09-2022", "18-09-2022");
		List<BookingRecord> bookingList=new ArrayList<BookingRecord>();
		bookingList.add(p1);
		bookingList.add(p2);
		when(service.findAll()).thenReturn(bookingList);
	mockMvc.perform(get("/booking/get"))
	.andExpect(status().isOk())
	.andExpect(content().contentType("application/json"))
	.andExpect(jsonPath("$[*]", hasSize(2)))
	.andExpect(jsonPath("$[0].id").value("1"))
	.andExpect(jsonPath("$[0].flightNumber").value("101"))
	.andExpect(jsonPath("$[0].origin").value("LKO"))
	.andExpect(jsonPath("$[0].destination").value("BLR"))
	.andExpect(jsonPath("$[0].flightDate").value("20-09-2022"))
	.andExpect(jsonPath("$[0].bookingDate").value("18-09-2022"));
		
	}
	
	@Test
	void testShowProductById() throws Exception {
		BookingRecord p1=new BookingRecord("1","101", "LKO", "BLR", "20-09-2022", "18-09-2022");
	when(service.getRecordById("1")).thenReturn(p1);
	mockMvc.perform(get("/booking/1"))
	.andExpect(status().isOk())
	.andExpect(content().contentType("application/json"))
	.andExpect(jsonPath("$[0].id").value("1"))
	.andExpect(jsonPath("$[0].flightNumber").value("101"))
	.andExpect(jsonPath("$[0].origin").value("LKO"))
	.andExpect(jsonPath("$[0].destination").value("BLR"))
	.andExpect(jsonPath("$[0].flightDate").value("20-09-2022"))
	.andExpect(jsonPath("$[0].bookingDate").value("18-09-2022"));
		
	}
	
	
	@Test
	void testShowProductInvalidId() throws Exception {
		BookingRecord p1=new BookingRecord("1","101", "LKO", "BLR", "20-09-2022", "18-09-2022");
	when(service.getRecordById("1")).thenReturn(p1);
	MvcResult result=mockMvc.perform(get("/booking/18"))
	.andExpect(status().isOk())
	.andReturn();
	assertThat(result.getResponse().toString())
	.as("Product with the id 1 doesn't exist");
		
	}
	
	
	/*@Test
	void testDeleteProductById() throws Exception {
		BookingRecord p1=new BookingRecord("1","101", "LKO", "BLR", "20-09-2022", "18-09-2022");
		String s="deleted successfully....";
	when(service.delete("1")).thenReturn(s);
	mockMvc.perform(delete("/booking/1"))
	.andExpect(status().isOk())
	.andExpect(content().string(s));	
	}
	
	/*@Test
	void testdeletePlanterInvalidId() throws Exception {
		Planter p1 = new Planter(2000,9, "red","oval",10, 90);
		String s="deleted successfully....";
		when(planterServiceImpl.deletePlanter(20)).thenReturn(s);
	MvcResult result=mockMvc.perform(delete("/planter/planters/20"))
	.andExpect(status().isOk())
	.andReturn();
	assertThat(result.getResponse().toString())
	.as("Planter with the id 20 doesn't exist");
		
	}*/
	
	/*@Test
	void testdeleteProductInvalidId() throws Exception {
		BookingRecord p1=new BookingRecord("1","101", "LKO", "BLR", "20-09-2022", "18-09-2022");
		String s="deleted successfully....";
		when(service.delete("1")).thenReturn(s);
	MvcResult result=mockMvc.perform(delete("/booking/11"))
	.andExpect(status().isOk())
	.andReturn();
	assertThat(result.getResponse().toString())
	.as("Product with the id 1 doesn't exist");
		
	}*/
	
	@Test
	void testAddProduct() throws Exception {
		BookingRecord p1=new BookingRecord("1","101", "LKO", "BLR", "20-09-2022", "18-09-2022");
		String s="added successfully....";
		when(service.save(p1));
		
		ObjectMapper mapper=new ObjectMapper();
		mapper.configure(SerializationFeature.WRAP_ROOT_VALUE, false);
		ObjectWriter  writer=mapper.writer().withDefaultPrettyPrinter();
		String reqstr=writer.writeValueAsString(p1);
	mockMvc.perform(post("/booking/add")
			.contentType("application/json")
			.content(reqstr))
	.andExpect(status().isOk())
	.andExpect(content().string(s));
		
	}
	
	@Test
	void testUpdateProduct() throws Exception {
		BookingRecord p1=new BookingRecord("1","101", "LKO", "BLR", "20-09-2022", "18-09-2022");
		String s="updated successfully....";
		when(service.save(p1));
		
		ObjectMapper mapper=new ObjectMapper();
		mapper.configure(SerializationFeature.WRAP_ROOT_VALUE, false);
		ObjectWriter  writer=mapper.writer().withDefaultPrettyPrinter();
		String reqstr=writer.writeValueAsString(p1);
	mockMvc.perform(put("/booking/")
			.contentType("application/json")
			.content(reqstr))
	.andExpect(status().isOk())
	.andExpect(content().string(s));
		
	}
}

