package com.app.dto;

import java.util.List;

import com.app.entity.SeatType;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SeatDeatilDto {

	private Double price;
  	private Integer seatCount;
    private Integer TotalBooked;
	private SeatType seatType;    
	private SeatNumberDto seatingNumberAndPassId;
}
