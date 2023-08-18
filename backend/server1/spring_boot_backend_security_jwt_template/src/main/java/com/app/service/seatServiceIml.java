
 package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.customException.ResourceNotFoundException;
import com.app.entity.Schedule;
import com.app.entity.Seat;
import com.app.repository.SeatRepository;
import com.app.repository.scheduleDetailRepository;

@Transactional
@Service
public class seatServiceIml implements seatService {
 
	@Autowired
	private SeatRepository seatRepo;
	@Autowired
	private scheduleDetailRepository scheduleRepo;
	@Override
	public List<Seat> getSeatDetail(Long id) {
		
	   Schedule schedule =scheduleRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Invalid schedule id"));
		List<Seat> seatList = seatRepo.findByScheduleId(schedule);

		return seatList;
	}
}
