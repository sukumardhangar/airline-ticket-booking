
 package com.app.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.app.customException.ResourceNotFoundException;
import com.app.dto.SeatDeatilDto;
import com.app.dto.SeatNumberDto;
import com.app.entity.Schedule;
import com.app.entity.Seat;
import com.app.repository.SeatRepository;
import com.app.repository.scheduleDetailRepository;


@Transactional
@Service
public class seatServiceIml implements seatService {
 
	@Autowired
	private RestTemplate restTemplate;
	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private SeatRepository seatRepo;
	@Autowired
	private scheduleDetailRepository scheduleRepo;
	@Override
	public List<SeatDeatilDto> getSeatDetail(Long id) {
		
	   Schedule schedule =scheduleRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Invalid schedule id"));
		List<Seat> seatList = seatRepo.findByScheduleId(schedule);
		System.out.println(seatList.size());
		List<SeatDeatilDto> seatDeatilDtoList=new ArrayList<SeatDeatilDto>();
		for (Seat seat : seatList) {
			System.out.println("before "+seat.getId());
	        SeatNumberDto seatFromOtherApi=restTemplate.getForObject("http://127.0.0.1:7078/seatController/getSeatDetailBySeatTypeId/"+seat.getId(),SeatNumberDto.class );
			System.out.println("after");
	        SeatDeatilDto seatDeatilDto = mapper.map(seat,SeatDeatilDto.class);
	        seatDeatilDto.setSeatingNumberAndPassId(seatFromOtherApi);
	        seatDeatilDtoList.add(seatDeatilDto);
	        
	        
		}
		return seatDeatilDtoList;
	}
}
