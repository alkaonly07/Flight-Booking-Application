package com.book.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.book.entity.BookingRecord;
import com.book.repository.BookRepository;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class BookServiceImp implements BookService{
	@Autowired
	private BookRepository bookrepo;
	
	public BookingRecord save(BookingRecord records) {
		
			return bookrepo.save(records);
	}
	
	public List<BookingRecord> findAll() {
		return bookrepo.findAll();
	}

	public void delete(String id){
		bookrepo.deleteById(id);
	}

	public Object getRecordById(String id){
		return bookrepo.findById(id);
	} 
}
