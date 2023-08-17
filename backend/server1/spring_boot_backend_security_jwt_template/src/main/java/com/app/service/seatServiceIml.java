package com.app.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.customException.ResourceNotFoundException;
import com.app.entity.Seat;
import com.app.repository.SeatRepository;

@Transactional
@Service
public class seatServiceIml implements seatService {
 
	@Autowired
	private SeatRepository seatRepo;
	@Override
	public Seat getSeatDetail(Long id) {
		Seat seat = seatRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Invalid person id"));

		return seat;
	}
}
