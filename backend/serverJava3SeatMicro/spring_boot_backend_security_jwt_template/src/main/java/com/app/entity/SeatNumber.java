package com.app.entity;

import java.util.List;

import javax.persistence.Id;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
@Document
public class SeatNumber {

	@Id
	private Long seatTypeNumber;
	private List<SeatValueList> list;
	
}
