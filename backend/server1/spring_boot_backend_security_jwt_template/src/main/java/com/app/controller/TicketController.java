package com.app.controller;

import java.io.IOException;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.dto.PassangerDto;
import com.app.dto.TicketDto;
import com.app.service.TicketService;
import static org.springframework.http.MediaType.*;


@RestController
@RequestMapping("/ticket")
@CrossOrigin(origins = "http://localhost:3000")

public class TicketController {

	@Autowired
	private ModelMapper mapper;
	@Autowired
	private TicketService ticketService;
	

	
	@PostMapping("/addBooking")
	public ResponseEntity<?> addBooking(@RequestBody TicketDto ticket)
	{
		 
		System.out.println(ticket.getPersonId());
		return ResponseEntity.status(HttpStatus.OK).body(ticketService.addBooking(ticket));
		
		
	}
	
	
	@GetMapping("/getConformTicket/{id}")
	public ResponseEntity<?> getConformTicket(@RequestParam Long id)
	{

		return ResponseEntity.status(HttpStatus.OK).body(ticketService.getConformTicket(id));
		
		
	}
	@GetMapping("/getTicketHistory/{id}")
	public ResponseEntity<?> getTicketHistory(@RequestParam Long id)
	{
            System.out.println("his "+id);
		return ResponseEntity.status(HttpStatus.OK).body(ticketService.getTicketHistory(id));
		
		
	}

	@PostMapping(value = "/addAdharImages/{id}", consumes = "multipart/form-data")
	public ResponseEntity<?> uploadAdharsImage(@PathVariable Long id, @RequestParam MultipartFile imageFile)
			throws IOException {
		return ResponseEntity.status(HttpStatus.CREATED).body(ticketService.uploadAdharImage(id, imageFile));
	}
	@PostMapping(value = "/addPassportImages/{id}", consumes = "multipart/form-data")
	public ResponseEntity<?> uploadPassPortImage(@PathVariable Long id, @RequestParam MultipartFile imageFile)
			throws IOException {
		return ResponseEntity.status(HttpStatus.CREATED).body(ticketService.uploadPassPortImage(id, imageFile));
	}
	
	@GetMapping(value="/downloadAdharImages/{id}",produces = {IMAGE_GIF_VALUE,IMAGE_JPEG_VALUE,IMAGE_PNG_VALUE})
	public ResponseEntity<?> downAImage(@PathVariable Long id) throws IOException {
		return ResponseEntity.ok(ticketService.downAdharImage(id));
	}

	@GetMapping(value="/downloadPassportImages/{id}",produces = {IMAGE_GIF_VALUE,IMAGE_JPEG_VALUE,IMAGE_PNG_VALUE})
	public ResponseEntity<?> downloadPassportImages(@PathVariable Long id) throws IOException {
		return ResponseEntity.ok(ticketService.downPassportImage(id));
	}
	
	@GetMapping("/cancelTicket/{id}")
	public ResponseEntity<?> cancelTicket(@RequestParam Long id)
	{

		return ResponseEntity.status(HttpStatus.OK).body(ticketService.cancelTicket(id));
		
		
	}
	
}
