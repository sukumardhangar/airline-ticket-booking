package com.app.service;

import java.util.List;

import com.app.dto.ApiResponse;
import com.app.dto.OpearatorDto;
import com.app.dto.OperatorFlightDetailDto;
import com.app.dto.PersonAuthDto;
import com.app.entity.Person;

public interface OperatorFlightDetailService  {

	ApiResponse addFlightDetails(OperatorFlightDetailDto detailDto);
	ApiResponse addOperator(OpearatorDto operator);
	OpearatorDto getOperator(Long id);
	ApiResponse editOperator(Person operator);
	OperatorFlightDetailDto getFlightSCheduleById(Long id);
	List<OperatorFlightDetailDto> getAllFlightOfuser(Long id);


	//Authenticate User (LogIn)
	 	Person authenitcateUser(String email);
	 	
	 	
	 	
	 	//find userId By email
	 	Long findUserId(String userName);
	 	
		//get user by ID
	 	PersonAuthDto finfUserById(Long userId);
	
	
}
