package com.app.dto;

import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OperatorFlightDetailDto
{
	 private String airlineName;
	 private String category;
	 private Long persId;
	 private Long airlineNumber;
	 private List<OperatorScheduleDto>listOfScedules;

}
