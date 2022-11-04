package com.book.model;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import com.book.entity.BookingRecord;

class BookingTest {

	BookingRecord b1;
	@BeforeEach
	public void before() {
		b1=new BookingRecord("1","101", "LKO", "BLR", "20-09-2022", "18-09-2022");
	}
	
	
	@AfterEach
	public void after() {
		b1=null;
	}
	
	@Test
	void testGetId() {
		assertEquals(1, b1.getId());
	}
	
	@Test
	void testGetFlightNumber() {
		assertEquals(101, b1.getFlightNumber());
	}
	@Test
	void testGetSource() {
		assertEquals("LKO", b1.getOrigin());
	}

	@Test
	void testGetDestination() {
		assertEquals("mobile", b1.getDestination());
	}

	@Test
	void testGetFlightDate() {
		assertEquals("mobile", b1.getFlightDate());
	}
	
	@Test
	void testGetBookingDate() {
		assertEquals("mobile", b1.getBookingDate());
	}

	@Test
	void testSetId() {
		b1.setId("1");
		assertEquals(1, b1.getId());
	}
	
	void testSetFlightNumber() {
		b1.setId("101");
		assertEquals(101, b1.getFlightNumber());
	}
	
	@Test
	void testSetSource() {
		b1.setOrigin("LKO");
		assertEquals("LKO", b1.getOrigin());
	}

	@Test
	void testSetDestination() {
		b1.setOrigin("BLR");
		assertEquals("BLR", b1.getDestination());
	}

	@Test
	void testSetFlightDate() {
		b1.setFlightDate("20-09-2022");
		assertEquals("20-09-2022", b1.getFlightDate());
	}
	
	@Test
	void testSetBookingDate() {
		b1.setBookingDate("18-09-2022");
		assertEquals("18-09-2022", b1.getBookingDate());
	}

}

