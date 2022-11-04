package com.book;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import com.book.entity.BookingRecord;
import com.book.repository.BookRepository;
import com.book.service.BookServiceImp;

@RunWith(SpringRunner.class)
@SpringBootTest
public class BookingApplicationTests {

	@Autowired
	private BookServiceImp bookservice;
	
	@MockBean
	private BookRepository bookrepo;
	
	@Test
	public void getBookingTest() {
		when(bookrepo.findAll()).thenReturn(Stream.
				of(new BookingRecord("101", "1234", "Delhi", "Chennai", "2022-03-23","2022-03-20")).collect(Collectors.toList()));
		assertEquals(1, bookservice.findAll().size());
	}
	
	@Test
	public void getAllBookingTest() {
		List<BookingRecord> list = new ArrayList<BookingRecord>();
		BookingRecord records1=new BookingRecord("101", "1234", "Delhi", "Chennai", "2022-03-23","2022-03-20");
		BookingRecord records2=new BookingRecord("102", "5678", "Delhi", "Maharashtra", "2022-03-25","2022-03-20");
		BookingRecord records3=new BookingRecord("103", "9101", "Delhi", "Banglore", "2022-03-30","2022-03-20");
		
		list.add(records1);
		list.add(records2);
		list.add(records3);
		
		when(bookrepo.findAll()).thenReturn(list);
		
		//test
		List<BookingRecord> BookingList=bookservice.findAll();
		assertEquals(3, BookingList.size());
		verify(bookrepo, times(1)).findAll();
	}
	
//	test for save Booking
	@Test
	public void saveTest(){
		BookingRecord records=new BookingRecord("101", "1234", "Delhi", "Chennai", "2022-03-23","2022-03-20");
		when(bookrepo.save(records)).thenReturn(records);
		assertEquals(records, bookservice.save(records));
	}
	
//	test for delete flight
	@Test
	public void deleteTest(){
		String id="101";
		BookingRecord records=new BookingRecord("101", "1234", "Delhi", "Chennai", "2022-03-23","2022-03-20");
		bookservice.save(records);
		bookservice.delete(id);
		verify(bookrepo,times(1)).deleteById(id);
	}
	

}
