package com.book.service;

import java.util.List;

import com.book.entity.BookingRecord;

public interface BookService {

	public  List<BookingRecord> findAll();
	public BookingRecord save( BookingRecord records);
	public void delete(String id);
}
