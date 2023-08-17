package com.app.service;

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
import com.app.repository.scheduleDetailRepository;
@Transactional
@Service
public class scheduleDetailServiceImp implements scheduleDetailService{
 
	@Autowired
	private scheduleDetailRepository scheduleRepo;
	@Override
	public  List<Schedule> getFlightDetailByUserDetails(BookingDto booking) {
		System.out.println("in service imple");		
		List<Schedule> s =	scheduleRepo.findBySourceAndDestination(booking.getSource(), booking.getDestination());
		return s;
	}
	

}
