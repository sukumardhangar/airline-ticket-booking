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
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.OpearatorDto;
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
	
	@PostMapping("/addOperator")
	public ResponseEntity<?> addOperator(@RequestBody OpearatorDto operator  )
    {
   	 return ResponseEntity.status(HttpStatus.OK).body(operService.addOperator(operator));
    }
	@GetMapping("/getOperator/{id}")
    public ResponseEntity<?> personDetails(@PathVariable Long id )
    {
   	 return ResponseEntity.status(HttpStatus.OK).body(operService.getOperator(id));
    }
	
	@PutMapping("/editOperator")
	public ResponseEntity<?> EditOperator(@RequestBody OpearatorDto operator  )
    {
   	 return ResponseEntity.status(HttpStatus.OK).body(operService.editOperator(operator));
    }
	@GetMapping("/getFlightDeatilByAirlineNumber/{id}")
	  public ResponseEntity<?> getFlightDeatilByAirlineNumber(@PathVariable Long id )
    {
   	 return ResponseEntity.status(HttpStatus.OK).body(operService.getFlightSCheduleById(id));
    } 
}
