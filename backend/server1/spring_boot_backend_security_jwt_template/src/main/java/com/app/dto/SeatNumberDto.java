package com.app.dto;

import java.util.List;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class SeatNumberDto {

	private Long seatTypeNumber;
	private List<SeatValueList> list;
    
	

}
