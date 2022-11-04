package com.order.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "db_sequence")
	
		public class DbSequenceOrder {
		    @Id
		    private String  id;
		    private int seq;
			public int getSeq() {
				return seq;
			}
			public void setSeq(int seq) {
				this.seq = seq;
			}
		

	}


