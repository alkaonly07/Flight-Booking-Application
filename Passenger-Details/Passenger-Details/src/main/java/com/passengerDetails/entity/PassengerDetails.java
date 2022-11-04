package com.passengerDetails.entity;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="passengerDetails")
public class PassengerDetails {
	
	/*
	 * @Transient public static final String SEQUENCE_NAME = "customer_sequence";
	 */
	
	@Id
    int id;
	
	@NotBlank(message = "Username is required")
    @Size(min = 3, max = 20)
    private String username;
	
	@NotBlank(message="First name is required")
	@Size(max = 20)
    String firstName;
	
	@NotBlank(message="Last name is required")
	@Size(max = 20)
    String lastName;
	
	@NotBlank(message="Email is required")
	@Email(message="invalid email")
    String email;
	
	@NotBlank(message="Gender is required")
    String gender;
	
    int nooftickets;
    
	public PassengerDetails(int id, String username, String firstName, String lastName,String email, String gender, int nooftickets) {
		super();
		this.id = id;
		this.username = username;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.gender = gender;
		this.nooftickets=nooftickets;
	}

	
	  public PassengerDetails() { super(); }
	 
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public int getNooftickets() {
		return nooftickets;
	}
	public void setNooftickets(int nooftickets) {
		this.nooftickets = nooftickets;
	}
	
	@Override
	public String toString() {
		return "Passenger [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", email=" + email +", gender=" + gender +", nooftickets=" + nooftickets + "]";
	}

	
	
    
    

}
