package com.app.dto;

import java.time.LocalDateTime;
import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OperatorScheduleDto 
{
	 private LocalDateTime deparutreTime;
	 private LocalDateTime arrivalTime;
	 private String source;
	 private String destination;
	 private Long flightId;
	 private  List<OperatorSeatDto>ListOfSeats;
	
}
