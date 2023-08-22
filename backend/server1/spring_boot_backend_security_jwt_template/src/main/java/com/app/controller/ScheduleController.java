package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.BookingDto;
import com.app.service.scheduleDetailService;
import com.app.service.seatService;

@RestController
@RequestMapping("/Booking")

@CrossOrigin(origins = "http://localhost:3000")

public class ScheduleController {
    @Autowired
	private seatService seatService;
	@Autowired
	private scheduleDetailService scheduleServ;
	@PostMapping("/getSchedule")
	public ResponseEntity<?> getallFlight(@RequestBody BookingDto booking)
	{
		System.out.println("sukumar sd"+booking.getSource());
		System.out.println("sukumar bd "+booking.getDestination());
		System.out.println("sukumar df "+booking.getDepartureTime());

		
		return ResponseEntity.status(HttpStatus.OK).body(scheduleServ.getFlightDetailByUserDetails(booking));
	}
	
	@GetMapping("/getSeat/{id}")
    public ResponseEntity<?> getSeatDetails(@PathVariable Long id )
    {
   	 return ResponseEntity.status(HttpStatus.OK).body(seatService.getSeatDetail(id));
    }
}
