package com.app.service;

import java.util.List;

import com.app.dto.SeatDeatilDto;

public interface seatService {
	List<SeatDeatilDto> getSeatDetail(Long id);

}
