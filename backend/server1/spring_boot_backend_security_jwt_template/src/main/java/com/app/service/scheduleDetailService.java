package com.app.service;

import java.util.List;

import com.app.dto.BookingDto;
import com.app.dto.ScheduleDto;

public interface scheduleDetailService {

	 List<ScheduleDto> getFlightDetailByUserDetails(BookingDto booking);
}
