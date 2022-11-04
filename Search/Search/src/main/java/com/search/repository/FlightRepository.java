package com.search.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.search.entity.Flight;
@Repository
public interface FlightRepository extends MongoRepository<Flight, Long> {

	Object findById(int i);

}

