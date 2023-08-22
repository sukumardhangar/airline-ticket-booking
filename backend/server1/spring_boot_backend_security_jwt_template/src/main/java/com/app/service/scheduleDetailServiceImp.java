package com.app.service;

import java.time.Duration;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.customException.ResourceNotFoundException;
import com.app.dto.BookingDto;
import com.app.dto.ScheduleDto;
import com.app.entity.Schedule;
import com.app.repository.SeatRepository;
import com.app.repository.scheduleDetailRepository;
@Transactional
@Service
public class scheduleDetailServiceImp implements scheduleDetailService{
 
	static final int MINUTES_PER_HOUR = 60;
    static final int SECONDS_PER_MINUTE = 60;
    static final int SECONDS_PER_HOUR = SECONDS_PER_MINUTE * MINUTES_PER_HOUR;
	@Autowired
	private SeatRepository seatRepo;
	@Autowired
	private scheduleDetailRepository scheduleRepo;
	@Override
	public  List<ScheduleDto> getFlightDetailByUserDetails(BookingDto booking) {
		System.out.println("in service imple");		
		List<Schedule> schudels =	scheduleRepo.findBySourceAndDestination(booking.getSource(), booking.getDestination());
		List<ScheduleDto> list=new ArrayList<ScheduleDto>();
		System.out.println(booking.getDepartureTime()+" input timeing");
		
		if(schudels.size()>0)
		{	
		  for (Schedule schedule : schudels) 
		  {
			if(schedule.getDeparutreTime().isAfter(booking.getDepartureTime()))
			{
				System.out.println(schedule.getDeparutreTime()+" db timeing");
				ScheduleDto s=new ScheduleDto();
				s.setAirlineName(schedule.getFlightDetailId().getAirlineName());
				s.setCategory(schedule.getFlightDetailId().getCategory());
				s.setArrivalTime(schedule.getArrivalTime());
				s.setDeparutreTime(schedule.getDeparutreTime());
				s.setDestination(schedule.getDestination());
				s.setSource(schedule.getSource());
				s.setScheduleId(schedule.getId());
		        DateTimeFormatter format = DateTimeFormatter.ofPattern("dd-MM-yyyy  -  HH:mm:ss");  
		      s.setArraivalFormatter(schedule.getArrivalTime().format(format));
		      s.setDepartureFormatter(schedule.getDeparutreTime().format(format));
		      Duration duration= Duration.between(schedule.getDeparutreTime(),schedule.getArrivalTime());
		      long seconds = duration.getSeconds();

		        long hours = seconds / SECONDS_PER_HOUR;
		        long minutes = ((seconds % SECONDS_PER_HOUR) / SECONDS_PER_MINUTE);
		        long secs = (seconds % SECONDS_PER_MINUTE);
		        Long arr[]= {hours,minutes,secs};
		        s.setArrOfDuration(arr);
            
		        list.add(s);
		        


				
			}
			
		  }
		}
		else
		{
			throw new ResourceNotFoundException("not availbale");
		}
		
		return list;
	}
	

}
