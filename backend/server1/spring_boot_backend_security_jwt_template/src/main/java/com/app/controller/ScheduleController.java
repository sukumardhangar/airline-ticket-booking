package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.BookingDto;
import com.app.entity.FlightDetail;
import com.app.repository.SeatRepository;
import com.app.service.scheduleDetailService;
import com.app.service.seatService;

@RestController
@RequestMapping("/Booking")
public class ScheduleController {
    @Autowired
	private seatService seatService;
	@Autowired
	private scheduleDetailService scheduleServ;
	@PostMapping("/getSchedule")
	public ResponseEntity<?> getallFlight(@RequestBody BookingDto booking)
	{
		System.out.println("sukumar "+booking.getSource());
		
		return ResponseEntity.status(HttpStatus.OK).body(scheduleServ.getFlightDetailByUserDetails(booking));
	}
	
	@GetMapping("/getSeat/{id}")
    public ResponseEntity<?> personDetails(@PathVariable Long id )
    {
   	 return ResponseEntity.status(HttpStatus.OK).body(seatService.getSeatDetail(id));
    }
}
