package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.SeatDetailDto;
import com.app.dto.SeatReciveDto;
import com.app.entity.SeatNumber;
import com.app.service.SeatNumberService;


@RestController
@RequestMapping("/seatController")
public class SeatNumberController {

	@Autowired
	private SeatNumberService seatServ;
	@PostMapping("/addSeat") //done
	public ResponseEntity<?> saveDetail(@RequestBody SeatReciveDto seatReciveDto)
	{
		System.out.println("in sever of mango spring");
		return ResponseEntity.status(HttpStatus.OK).body(seatServ.saveDetail(seatReciveDto.getSeatTypeNo(),seatReciveDto.getSeatCount()));
	}
	@GetMapping("/getSeatDetailBySeatTypeId/{id}") //done
	public ResponseEntity<?> getSeatDetailBySeatType(@PathVariable Long id)
	{
		System.out.println(id);
		return ResponseEntity.status(HttpStatus.OK).body(seatServ.getSeatDetailBySeatTypeId(id));
	}
	@GetMapping("/getAllSeatDetail")
	public ResponseEntity<?> getAllSeatDetail()
	{
		return ResponseEntity.status(HttpStatus.OK).body(seatServ.getAll());
	}
	@PutMapping("/addPassangerId")
	public ResponseEntity<?> addPassangerId(@RequestBody SeatDetailDto detailDto )
	{
		return ResponseEntity.status(HttpStatus.OK).body(seatServ.addPassangerId(detailDto));
	}
	@PostMapping("/getSeatNumberOfPassnager")
	public Long getSeatNumberOfPassnager(@RequestBody SeatDetailDto detailDto )
	{
		System.out.println("in getSeatNumberOfPassnager");
	   Long l= seatServ.getSeatNumberOfPassnager(detailDto);
	   System.out.println(l);
	   return l;
	}
	

}









