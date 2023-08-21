package com.app.dto;

import com.app.entity.SeatType;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OperatorSeatDto 
{

	private Long seeatsId;
   private SeatType seatType;
   private Double price;
   private Integer seatCount;
   private Long  schedId;
   private Integer TotalBooked;


}
