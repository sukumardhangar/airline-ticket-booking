package com.app.dto;

import java.time.LocalDateTime;
import java.util.Date;
import java.time.format.DateTimeFormatter;  

import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
public class ScheduleDto {

	 private Long ScheduleId;
	 private LocalDateTime deparutreTime;
	 private LocalDateTime arrivalTime;
	 private String source;
	 private String destination;
	 private String airlineName;
	 private Long []arrOfDuration=new Long[3];
	 private String category;
	 private String arraivalFormatter;
	 private String departureFormatter;



}
