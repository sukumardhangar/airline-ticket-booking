package com.app.controller;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.BookingDto;
import com.app.dto.PassangerDto;
import com.app.dto.PersonDto;
import com.app.dto.TicketDto;
import com.app.entity.Passanger;
import com.app.entity.Ticket;
import com.app.service.TicketService;

@RestController
@RequestMapping("/ticket")
public class TicketController {

	@Autowired
	private ModelMapper mapper;
	@Autowired
	private TicketService ticketService;
	
	@PostMapping("/addTicket")
	public ResponseEntity<?> addTicket(@RequestBody TicketDto ticket)
	{
		return ResponseEntity.status(HttpStatus.OK).body(ticketService.addTicket(ticket));
		
		
	}
	@PostMapping("/addPassanger")
	public ResponseEntity<?> addPassanger(@RequestBody PassangerDto passanger)
	{

		return ResponseEntity.status(HttpStatus.OK).body(ticketService.addPassanger(passanger));
		
		
	}
	
}
