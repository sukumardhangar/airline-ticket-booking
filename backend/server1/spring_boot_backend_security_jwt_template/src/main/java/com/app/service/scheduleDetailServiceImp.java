package com.app.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.customException.ResourceNotFoundException;
import com.app.dto.BookingDto;
import com.app.entity.FlightDetail;
import com.app.entity.Person;
import com.app.entity.Schedule;
import com.app.entity.Seat;
import com.app.repository.SeatRepository;
import com.app.repository.scheduleDetailRepository;
@Transactional
@Service
public class scheduleDetailServiceImp implements scheduleDetailService{
 
	@Autowired
	private SeatRepository seatRepo;
	@Autowired
	private scheduleDetailRepository scheduleRepo;
	@Override
	public  List<Schedule> getFlightDetailByUserDetails(BookingDto booking) {
		System.out.println("in service imple");		
		List<Schedule> schudels =	scheduleRepo.findBySourceAndDestination(booking.getSource(), booking.getDestination());
		
		return schudels;
	}
	

}
