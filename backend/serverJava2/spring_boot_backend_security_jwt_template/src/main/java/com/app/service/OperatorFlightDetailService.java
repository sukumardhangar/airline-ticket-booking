package com.app.service;

import com.app.dto.ApiResponse;
import com.app.dto.OpearatorDto;
import com.app.dto.OperatorFlightDetailDto;

public interface OperatorFlightDetailService  {

	ApiResponse addFlightDetails(OperatorFlightDetailDto detailDto);
	ApiResponse addOperator(OpearatorDto operator);
	OpearatorDto getOperator(Long id);
	ApiResponse editOperator(OpearatorDto operator);
	OperatorFlightDetailDto getFlightSCheduleById(Long id);

	
}
