package com.book.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.book.entity.BookingRecord;
@Repository
public interface BookRepository extends MongoRepository<BookingRecord, String> {

	void deleteById(String id);

	
}
	