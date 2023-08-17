package com.app.service;

import java.util.List;

import com.app.dto.BookingDto;
import com.app.entity.FlightDetail;
import com.app.entity.Schedule;
import com.app.entity.Seat;

public interface scheduleDetailService {

	 List<Schedule> getFlightDetailByUserDetails(BookingDto booking);
}
