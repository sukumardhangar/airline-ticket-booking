package com.app.dto;

import com.app.entity.SeatType;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OperatorSeatDto 
{

   private SeatType seatType;
   private Double price;
   private Integer seatCount;
   private Long  schedId;


}
