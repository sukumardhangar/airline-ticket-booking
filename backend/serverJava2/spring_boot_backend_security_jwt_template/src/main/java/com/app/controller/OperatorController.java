package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.OperatorFlightDetailDto;
import com.app.service.OperatorFlightDetailService;

@RestController
@RequestMapping("/operator")
public class OperatorController 
{
     @Autowired
	private OperatorFlightDetailService operService;

	@PostMapping("/addFlightDetails")
	public ResponseEntity<?> getallFlight(@RequestBody OperatorFlightDetailDto detailDto)
	{
		
		return ResponseEntity.status(HttpStatus.OK).body(operService.addFlightDetails(detailDto));
	}
}
