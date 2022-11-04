package com.passengerDetails.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.passengerDetails.entity.PassengerDetails;

@Repository
public interface PassengerRepository extends MongoRepository<PassengerDetails, Integer> {

	PassengerDetails findById(int id);


}
