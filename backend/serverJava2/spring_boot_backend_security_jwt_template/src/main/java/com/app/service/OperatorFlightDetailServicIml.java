package com.app.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.customException.ResourceNotFoundException;
import com.app.dto.ApiResponse;
import com.app.dto.OpearatorDto;
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
	        System.out.println("in try before"+detailDto.getAirlineNumber());
 
		 flightDetail=	flightRepo.findByAirlineNumber(detailDto.getAirlineNumber()).orElseThrow(()-> new Exception());
	        System.out.println("in try after"+flightDetail.getCategory());

		}
		catch(Exception e)
		{
	        System.out.println("in exception before");

			FlightDetail flightDetails  =  mapper.map(detailDto,FlightDetail.class);

			 flightDetail=	flightRepo.save(flightDetails);
		        System.out.println("in exception"+flightDetail.getCategory());

			
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
				seat.setScheduleId(schedule);
				seatRepo.save(seat);
				
			}
			scheduleRepo.save(schedule);
		}
		
		 return new ApiResponse("flight scedule addedSuccsfuly");
	
	}

	@Override
	public ApiResponse addOperator(OpearatorDto operator) {
		
		Person person= mapper.map(operator,Person.class);
		personRepo.save(person);
		return new ApiResponse("operator added succsfully");
	}

	@Override
	public OpearatorDto getOperator(Long id) {
	Person person=	personRepo.findById(id).orElseThrow(()-> new ResourceNotFoundException("not valid id"));
	OpearatorDto operator=mapper.map(person,OpearatorDto.class);
	operator.setOperatorId(person.getId());
		return operator;
	}

	@Override
	public ApiResponse editOperator(OpearatorDto operator) {
		Person person=	personRepo.findById(operator.getOperatorId()).orElseThrow(()-> new ResourceNotFoundException("not valid id"));
		
		Person per	=mapper.map(operator,Person.class);
		per.setId(person.getId());
		personRepo.save(per);
		
		return new ApiResponse("edited successefully");
	}

	@Override
	public OperatorFlightDetailDto getFlightSCheduleById(Long id) {
		
		FlightDetail flightDetail=flightRepo.findByAirlineNumber(id).orElseThrow(()-> new ResourceNotFoundException("not valid id"));
		OperatorFlightDetailDto flightDetailDto=mapper.map(flightDetail,OperatorFlightDetailDto.class);
		List<Schedule> scheduleList=scheduleRepo.findByFlightDetailId(flightDetail);
		List<OperatorScheduleDto>operatorScheduleDtoList=new ArrayList<OperatorScheduleDto>();
		for (Schedule schedule : scheduleList) {
			
			OperatorScheduleDto scheduleDto=mapper.map(schedule,OperatorScheduleDto.class);
			scheduleDto.setScheId(schedule.getId());
			List<OperatorSeatDto>Seatdtos=new ArrayList<OperatorSeatDto>();
			List<Seat>SeatList=seatRepo.findByScheduleId(schedule);
			for (Seat seat : SeatList) {
				OperatorSeatDto operatorSeatDto=mapper.map(seat,OperatorSeatDto.class);
				operatorSeatDto.setSeeatsId(seat.getId());
				Seatdtos.add(operatorSeatDto);
			}
			scheduleDto.setListOfSeats(Seatdtos);
			operatorScheduleDtoList.add(scheduleDto);
			
		}
		flightDetailDto.setListOfScedules(operatorScheduleDtoList);
		
		return flightDetailDto;
	}
     
}
