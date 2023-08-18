package com.app.service;

import com.app.dto.ApiResponse;
import com.app.dto.OperatorFlightDetailDto;

public interface OperatorFlightDetailService  {

	ApiResponse addFlightDetails(OperatorFlightDetailDto detailDto);
}
