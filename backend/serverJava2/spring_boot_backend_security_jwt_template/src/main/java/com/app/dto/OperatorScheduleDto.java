package com.app.dto;

import lombok.Setter;

import java.time.LocalDateTime;

import com.app.entity.SeatType;

import lombok.Getter;

@Getter
@Setter
public class OperatorScheduleDto 
{
	 private LocalDateTime deparutreTime;
	 private LocalDateTime arrivalTime;
	 private String source;
	 private String destination;
	 private String airlineName;
	 private String category;
	 private Long personId;
	 private SeatType seatType;

	
}
