package com.book.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.book.entity.BookingRecord;
import com.book.service.BookServiceImp;

import lombok.extern.slf4j.Slf4j;
@CrossOrigin(origins="http://localhost:3000")
@RestController
@Slf4j
@RequestMapping("/api/booking")
public class BookingController {
	
	
	@Autowired
	private BookServiceImp bookServiceImp;

	@PostMapping("/add")
	public ResponseEntity<BookingRecord> addRecords(@Valid @RequestBody BookingRecord records) {
		
			BookingRecord book=this.bookServiceImp.save(records);
			return new ResponseEntity<>(book,HttpStatus.CREATED);
	}

	/*@PutMapping("/update/{id}")
	public ResponseEntity<BookingRecord> updateRecords(@Valid @RequestBody BookingRecord records, @PathVariable  String id){
			BookingRecord book=this.bookServiceImp.save(records);
			return new ResponseEntity<>(book,HttpStatus.CREATED);
	}*/
	
	@GetMapping("/get/{id}")
	public ResponseEntity<Object> getRecordById(@Valid @PathVariable  String id)
		{
			Object records= bookServiceImp.getRecordById(id);
			 return new  ResponseEntity<>(records,HttpStatus.OK); 
		}

	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> deleteRecords(@Valid @PathVariable String id){
		bookServiceImp.delete(id);
		return ResponseEntity.ok(" Deleted operation done ");
	}
	

	@GetMapping("/get")
	public ResponseEntity<List<BookingRecord>> getRecords(){
		List<BookingRecord> records=bookServiceImp.findAll();
		return new  ResponseEntity<>(records,HttpStatus.OK);
	}

		
}
