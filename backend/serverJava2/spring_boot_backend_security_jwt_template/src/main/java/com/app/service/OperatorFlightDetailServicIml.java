package com.app.service;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.customException.ResourceNotFoundException;
import com.app.dto.ApiResponse;
import com.app.dto.OperatorFlightDetailDto;
import com.app.dto.OperatorScheduleDto;
import com.app.dto.OperatorSeatDto;
import com.app.entity.FlightDetail;
import com.app.entity.Person;
import com.app.entity.Schedule;
import com.app.entity.Seat;
import com.app.repository.FlightRepository;
import com.app.repository.PersonRepository;
import com.app.repository.SeatRepository;
import com.app.repository.scheduleDetailRepository;

@Transactional
@Service
public class OperatorFlightDetailServicIml implements OperatorFlightDetailService
{
	@Autowired
	private ModelMapper mapper;
    
	@Autowired
	private PersonRepository personRepo;
	@Autowired
    private FlightRepository flightRepo;
	@Autowired
	private scheduleDetailRepository scheduleRepo;
	@Autowired
	private SeatRepository seatRepo;
	
	@Override
	public ApiResponse addFlightDetails(OperatorFlightDetailDto detailDto)
	{
    
		FlightDetail flightDetail=null;
		try
		{
	        System.out.println("in try before");

		 flightDetail=	flightRepo.findByAirlineNumber(detailDto.getAirlineNumber());
	        System.out.println("in try after"+flightDetail.getCategory());

		}
		catch(Exception e)
		{
			
			FlightDetail flightDetails  =  mapper.map(detailDto,FlightDetail.class);
	        System.out.println("in exception"+flightDetail.getCategory());

			 flightDetail=	flightRepo.save(flightDetails);
			
		}
        System.out.println("in before" +flightDetail.getAirlineName());

		System.out.println(flightDetail.getId());
        System.out.println("in after");

		 Person person=personRepo.findById(detailDto.getPersId()).orElseThrow(()-> new ResourceNotFoundException("not valid id"));
         flightDetail.setPersonId(person);
         System.out.println("in servimpl");
		FlightDetail detail= flightRepo.save(flightDetail);
		 for (OperatorScheduleDto scheduleDto : detailDto.getListOfScedules()){	
			Schedule schedule=mapper.map(scheduleDto,Schedule.class);
			schedule.setFlightDetailId(detail);
			for (OperatorSeatDto scd : scheduleDto.getListOfSeats()) 
			{
				Seat seat=mapper.map(scd,Seat.class);
				seatRepo.save(seat);
				
			}
			scheduleRepo.save(schedule);
		}
		
		 return new ApiResponse("flight scedule addedSuccsfuly");
	
	}
     
}
