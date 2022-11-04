package com.book.entity;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor

@Document(collection="BookingRecords")
public class BookingRecord {
	
	@Id
	@NotEmpty(message = "Id is required")
	String id;
    
	@NotEmpty(message = "Flight Number is required")
	@Size(min = 3, message = "Flight Number must be minimum of 3 Character")
    private String flightNumber;
	
	@NotEmpty(message = "Source is required")
	@Size(max = 40)
    private String origin;
	
	@NotEmpty(message = "Destination is required")
	@Size(max = 40)
    private String destination;
	
	@NotEmpty(message = "Please mention the Flight Date")
    private String flightDate;
	
	@NotEmpty(message = "Date of Booking is required")
    private String bookingDate;
	

	public BookingRecord(String id, String flightNumber, String origin, String destination, String flightDate,
			String bookingDate) {
		super();
		this.id = id;
		this.flightNumber = flightNumber;
		this.origin = origin;
		this.destination = destination;
		this.flightDate = flightDate;
		this.bookingDate = bookingDate;
	}


	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getFlightNumber() {
		return flightNumber;
	}

	public void setFlightNumber(String flightNumber) {
		this.flightNumber = flightNumber;
	}

	public String getOrigin() {
		return origin;
	}

	public void setOrigin(String origin) {
		this.origin = origin;
	}

	public String getDestination() {
		return destination;
	}

	public void setDestination(String destination) {
		this.destination = destination;
	}

	public String getFlightDate() {
		return flightDate;
	}

	public void setFlightDate(String flightDate) {
		this.flightDate = flightDate;
	}

	public String getBookingDate() {
		return bookingDate;
	}

	public void setBookingDate(String bookingDate) {
		this.bookingDate = bookingDate;
	}
	
	@Override
	public String toString() 
	{
		return "BookingRecord [id = " + id + ", flightNumber = " + flightNumber + ", origin = " + origin + ", destination = "
			+ destination + ", flightDate = " + flightDate + ", bookingDate = " + bookingDate +  "]";
	}
 	

}
