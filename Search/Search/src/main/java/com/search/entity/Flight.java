package com.search.entity;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@NoArgsConstructor
//@AllArgsConstructor(staticName = "build")
@AllArgsConstructor
@Setter
@Getter
@Document(collection = "search")
public class Flight {
	
	
    @Id
	private long id;
	
    @NotEmpty(message="Please Enter Flight Number")
    @Size(min = 4, message = "Flight Number must be minimum of 4 Character")
	private String flightNumber;
    
    @NotEmpty(message="Please Enter origin")
	String origin;
    
    @NotEmpty(message="Please Enter Destination")
	String destination;
    
    @DateTimeFormat
	String flightDate;
	
//	public Flight() {
//		super();
//	}

	public Flight(long id, String flightNumber, String origin, String destination, String flightDate) {
		super();
		this.id = id;
		this.flightNumber = flightNumber;
		this.origin = origin;
		this.destination = destination;
		this.flightDate = flightDate;
	}

	public Flight() {
		// TODO Auto-generated constructor stub
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
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

	@Override
	public String toString() {
		return "Flight [id=" + id + ", flightNumber=" + flightNumber + ", origin=" + origin + ", destination="
				+ destination + ", flightDate=" + flightDate + ", getId()=" + getId() + ", getFlightNumber()="
				+ getFlightNumber() + ", getOrigin()=" + getOrigin() + ", getDestination()=" + getDestination()
				+ ", getFlightDate()=" + getFlightDate() + "]";
	}
	
	
	
}
