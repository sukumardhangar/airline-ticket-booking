package com.app.service;

import java.util.List;

import com.app.dto.ApiResponse;
import com.app.dto.SeatDetailDto;
import com.app.entity.SeatNumber;

public interface SeatNumberService {

	SeatNumber getSeatDetailBySeatTypeId(Long id);

	ApiResponse saveDetail(Long seatType,Long SeatCount);

	List<SeatNumber> getAll();

	ApiResponse addPassangerId(SeatDetailDto detailDto);

	Long getSeatNumberOfPassnager(SeatDetailDto detailDto);
	
}
