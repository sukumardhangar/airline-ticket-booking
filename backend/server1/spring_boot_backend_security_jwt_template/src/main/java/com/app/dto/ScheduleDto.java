package com.app.dto;

import java.time.Duration;
import java.time.LocalDateTime;

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


}
