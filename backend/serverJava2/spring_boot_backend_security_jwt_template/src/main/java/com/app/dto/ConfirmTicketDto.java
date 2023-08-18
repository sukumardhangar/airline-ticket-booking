package com.app.dto;

import java.time.LocalDateTime;
import java.util.List;

import com.app.entity.Passanger;
import com.app.entity.SeatType;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ConfirmTicketDto {
	
 private SeatType seatType;
 private Double price;
 private LocalDateTime deparutreTime;
 private LocalDateTime arrivalTime;
 private List <PassangerDto> passangerDto;
 private String source;
 private String destination;
 private String airlineName;



}
