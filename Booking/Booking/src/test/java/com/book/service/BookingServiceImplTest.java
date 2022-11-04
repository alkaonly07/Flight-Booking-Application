package com.book.service;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;

import com.book.service.BookServiceImp;
import com.book.entity.BookingRecord;
import com.book.exception.BookingNotFoundException;
import com.book.repository.BookRepository;


@SpringBootTest
@AutoConfigureMockMvc
public class BookingServiceImplTest {

	
	@InjectMocks
	private BookServiceImp service;
	
	@Mock
	private BookRepository repository;
	
	@Test
	void testServiceNotNull() {
		assertThat(service).isNotNull();
	}
	
	@Test
	void testRepositoryNotNull() {
		assertThat(repository).isNotNull();
	}
	
	@Test
	void testGetAllProducts() {
		BookingRecord p1=new BookingRecord("1","101", "LKO", "BLR", "20-09-2022", "18-09-2022");
		BookingRecord p2=new BookingRecord("2","102", "GOA", "LKO", "20-09-2022", "18-09-2022");
		List<BookingRecord> bookingList=new ArrayList<BookingRecord>();
		bookingList.add(p1);
		bookingList.add(p2);
		when(repository.findAll()).thenReturn(bookingList);
		assertEquals(bookingList,service.findAll());
		
	}
	
	@Test
	void testGetProductById() throws BookingNotFoundException {
		BookingRecord p1=new BookingRecord("1","101", "LKO", "BLR", "20-09-2022", "18-09-2022");
		when(repository.findById("1")).thenReturn(Optional.of(p1));
		assertEquals(p1,service.getRecordById("1"));
	}
	
	@Test
	void testGetProductByInvalidId() throws BookingNotFoundException {
		BookingRecord p1=new BookingRecord("1","101", "LKO", "BLR", "20-09-2022", "18-09-2022");
		when(repository.findById("1")).thenReturn(Optional.of(p1));
		try {
			assertThat(service.getRecordById("11")).as("Product with the id 1 doesn't exist");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	@SuppressWarnings({ "unchecked", "unlikely-arg-type" })
	@Test
	void testAddProduct() throws BookingNotFoundException {
		BookingRecord p1=new BookingRecord("1","101", "LKO", "BLR", "20-09-2022", "18-09-2022");
		((List<BookingRecord>) assertThat(service.save(p1)))
		.contains("added successfully....");
	
	}	
	@SuppressWarnings({ "unchecked", "unlikely-arg-type" })
	@Test
	void testAddProductAlreadyExists() throws BookingNotFoundException {
		BookingRecord p1=new BookingRecord("1","101", "LKO", "BLR", "20-09-2022", "18-09-2022");
		when(repository.findById("1")).thenReturn(Optional.of(p1));
	try {
		((List<BookingRecord>) assertThat(service.save(p1)))
		.contains("Product with the id "+p1.getId()+" already exist");
	}catch(Exception e) {
		
	}
	}
	
	@SuppressWarnings({ "unchecked", "unlikely-arg-type" })
	@Test
	void testupdateProduct() throws BookingNotFoundException {
		BookingRecord p1=new BookingRecord("1","101", "LKO", "BLR", "20-09-2022", "18-09-2022");
		when(repository.findById("1")).thenReturn(Optional.of(p1));
		((List<BookingRecord>) assertThat(service.save(p1)))
		.contains("updated successfully....");
	
	}
	
	@SuppressWarnings({ "unchecked", "unlikely-arg-type" })
	@Test
	void testupdateProductDoesnotExists() throws BookingNotFoundException {
		BookingRecord p1=new BookingRecord("1","101", "LKO", "BLR", "20-09-2022", "18-09-2022");
		when(repository.findById("10")).thenReturn(Optional.of(p1));
	try {
		((List<BookingRecord>) assertThat(service.save(p1)))
		.contains("Product with the id "+p1.getId()+" doesn't exist for update");
	}catch(Exception e) {
		
	}
	}
	
	/*@Test
	void testDeleteProductById() throws BookingNotFoundException {
		BookingRecord p1=new BookingRecord("1","101", "LKO", "BLR", "20-09-2022", "18-09-2022");
		when(repository.findById("1")).thenReturn(Optional.of(p1));
		assertThat(service.delete("1"))
		.contains("deleted successfully....");
	}
	
	@Test
	void testDeleteProductByInvalidId() throws BookingNotFoundException {
		BookingRecord p1=new BookingRecord("1","101", "LKO", "BLR", "20-09-2022", "18-09-2022");
		when(repository.findById("1")).thenReturn(Optional.of(p1));
		try {
			assertThat(service.delete("11"))
			.contains("Product with the id "+p1.getId()+" doesn't exist");
		}catch(Exception e) {
			
		}
	}*/
	
	
	}
