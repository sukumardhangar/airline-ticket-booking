package com.app.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

import com.app.customException.ResourceNotFoundException;
import com.app.dto.ApiResponse;
import com.app.dto.ConfirmTicketDto;
import com.app.dto.PassangerDto;
import com.app.dto.SeatNumberDto;
import com.app.dto.SeatSendDetailDto;
import com.app.dto.TicketDto;
import com.app.entity.Address;
import com.app.entity.Passanger;
import com.app.entity.Person;
import com.app.entity.Seat;
import com.app.entity.StatusType;
import com.app.entity.Ticket;
import com.app.repository.AddressRepoistory;
import com.app.repository.PassangerRepository;
import com.app.repository.PersonRepository;
import com.app.repository.SeatRepository;
import com.app.repository.TicketRepoitory;
import com.fasterxml.jackson.databind.ObjectMapper;


@Transactional
@Service
public class TicketServieImp implements TicketService {

	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private AddressRepoistory addreRepo;
	@Autowired
	private PersonRepository personRepo;
	@Autowired
	private SeatRepository seatRepo;
	@Autowired
	private TicketRepoitory ticketRepo;
	@Autowired
	private PassangerRepository passrepo;
	@Autowired
	private RestTemplate restTemplate;
	
	@Override
	public ApiResponse addBooking(TicketDto ticket) {
       Person per = personRepo.findById(ticket.getPersonId()).orElseThrow(() -> new ResourceNotFoundException("Invalid person id"));
	   Seat set = seatRepo.findById(ticket.getSeatId()).orElseThrow(() -> new ResourceNotFoundException("Invalid person id"));
	   set.setTotalBooked(set.getTotalBooked()+ticket.getPassangerDtoList().size());
      Ticket tic=new Ticket();
      tic.setPersonId(per);
      tic.setSeatId(set);
      tic.setTotalPrice(ticket.getTotalPrice());
      tic.setTicketStatus(StatusType.DONE);
      Ticket confirmedTicket  = ticketRepo.save(tic);
      
      for (PassangerDto passDto : ticket.getPassangerDtoList()) 
      {
    	  Address address=  mapper.map(passDto.getAddressDto(),Address.class);
    	  Address confirmedAddress =   addreRepo.save(address);
    	  
    	  Passanger passanger=  mapper.map(passDto,Passanger.class);
    	  passanger.setAddressId(confirmedAddress);
    	  passanger.setTicketId(confirmedTicket);
    	  System.out.println("before pass added");
    	  Passanger pas= passrepo.save(passanger);
    	  System.out.println("after pass added");

    	  SeatSendDetailDto seatSendDTo=new SeatSendDetailDto();
    	  seatSendDTo.setPassangerId(pas.getId());
    	  seatSendDTo.setSeatingNumber(passDto.getSeatNumber());
    	  seatSendDTo.setSeatTypeNumber(confirmedTicket.getSeatId().getId());;

    	  
    	  boolean check=putRequest(seatSendDTo);
    	  System.out.println(check);
    	  
    	  
     }
      
		return new ApiResponse("Ticket confirmed");
	}
	
	public boolean putRequest(SeatSendDetailDto seatSendDTo) {
		try {
			RestTemplate restTemplate = new RestTemplate();
			HttpHeaders headers = new HttpHeaders();
//			headers.set("Authorization", "Bearer " + token);
			headers.setContentType(MediaType.APPLICATION_JSON);

     		String url="http://127.0.0.1:7078/seatController/addPassangerId";

			String json = new ObjectMapper().writeValueAsString(seatSendDTo);
			HttpEntity<String> entity = new HttpEntity<>(json, headers);

			Object res = restTemplate.exchange(url, HttpMethod.PUT, entity, Object.class);
			return true;

		} catch (Exception e) {
			return false;
		}
	}
	
	@Override
	public ConfirmTicketDto getConformTicket(Long id) {
		Ticket ticss = ticketRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Invalid person id"));
		Ticket tic= ticketRepo.save(ticss);
		
		List<Passanger> listofPassanger=passrepo.findAllByTicketId(tic);
		List<PassangerDto> passangerDtoList=new ArrayList<>();
		for (Passanger passanger : listofPassanger) {
			
			PassangerDto p=new PassangerDto();
			p.setFirstName(passanger.getFirstName());
			p.setLastName(passanger.getLastName());
			p.setAge(passanger.getAge());
			p.setDob(passanger.getDob());
			p.setGender(passanger.getGender());
			p.setAdharNo(passanger.getAdharNo());
			  SeatSendDetailDto seatSendDTo=new SeatSendDetailDto();
	    	  seatSendDTo.setPassangerId(passanger.getId());
	    	  seatSendDTo.setSeatTypeNumber(passanger.getTicketId().getSeatId().getId());;
	    	  System.out.println(passanger.getTicketId().getId()+" "+passanger.getId()); 
	    	  
			 Long r=postRequest(seatSendDTo);
			 p.setSeatNumber(r);
				passangerDtoList.add(p);

			
		}
		
		ConfirmTicketDto confirmTicketDto=new ConfirmTicketDto();
		confirmTicketDto.setAirlineName(tic.getSeatId().getScheduleId().getFlightDetailId().getAirlineName());
		confirmTicketDto.setSeatType(tic.getSeatId().getSeatType());
		confirmTicketDto.setPrice(tic.getTotalPrice());
		confirmTicketDto.setDeparutreTime(tic.getSeatId().getScheduleId().getDeparutreTime());
		confirmTicketDto.setArrivalTime(tic.getSeatId().getScheduleId().getArrivalTime());
		confirmTicketDto.setDestination(tic.getSeatId().getScheduleId().getDestination());
		confirmTicketDto.setSource(tic.getSeatId().getScheduleId().getSource());
		confirmTicketDto.setPassangerDto(passangerDtoList);
		
		
		return confirmTicketDto;
	}
	
	public Long postRequest(SeatSendDetailDto seatSendDTo) {
		try {
			RestTemplate restTemplate = new RestTemplate();
			HttpHeaders headers = new HttpHeaders();
//			headers.set("Authorization", "Bearer " + token);
			headers.setContentType(MediaType.APPLICATION_JSON);

     		String url="http://127.0.0.1:7078/seatController/getSeatNumberOfPassnager";

			String json = new ObjectMapper().writeValueAsString(seatSendDTo);
			HttpEntity<String> entity = new HttpEntity<>(json, headers);
          System.out.println("before restTemplate call");
          ResponseEntity<Long> res = restTemplate.exchange(url, HttpMethod.POST, entity, Long.class);

//			ResponseEntity<Long> respo=(ResponseEntity<Long>) res;
//
          Long r=null;
//	          
          if(res.getStatusCode().is2xxSuccessful())
        	    r= res.getBody();
          else
        	  r=1432l;
          
          
	     System.out.println("after restTemplate call ");

			return  r;

		} catch (Exception e) {
			return 14l;
		}
	}
	
	@Override
	public List<ConfirmTicketDto> getTicketHistory(Long id) {
		
		Person per = personRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Invalid person id"));
		         List<Ticket> ticketList  = ticketRepo.findByPersonId(per);
		         
		         List<ConfirmTicketDto> ConfirmTicketDtoList=new ArrayList<ConfirmTicketDto>();
		         for (Ticket tic : ticketList) 
		         {
					
		        	 List<Passanger> listofPassanger=passrepo.findAllByTicketId(tic);
		     		List<PassangerDto> passangerDtoList=new ArrayList<>();
		     		for (Passanger passanger : listofPassanger) {
		     			
		     			PassangerDto p=new PassangerDto();
		     			p.setFirstName(passanger.getFirstName());
		     			p.setLastName(passanger.getLastName());
		     			p.setAge(passanger.getAge());
		     			p.setDob(passanger.getDob());
		     			p.setGender(passanger.getGender());
		     			p.setAdharNo(passanger.getAdharNo());
		     			SeatSendDetailDto seatSendDTo=new SeatSendDetailDto();
		  	    	  seatSendDTo.setPassangerId(passanger.getId());
		  	    	  seatSendDTo.setSeatTypeNumber(passanger.getTicketId().getSeatId().getId());;
		  	    	  System.out.println(passanger.getTicketId().getId()+" "+passanger.getId()); 
		  	    	  
		  			 Long r=postRequest(seatSendDTo);
		  			 p.setSeatNumber(r);
		     			passangerDtoList.add(p);
		     			
		     			
		     		}
		     		
		     		ConfirmTicketDto confirmTicketDto=new ConfirmTicketDto();
		     		confirmTicketDto.setAirlineName(tic.getSeatId().getScheduleId().getFlightDetailId().getAirlineName());
		     		confirmTicketDto.setSeatType(tic.getSeatId().getSeatType());
		     		confirmTicketDto.setPrice(tic.getTotalPrice());
		     		confirmTicketDto.setDeparutreTime(tic.getSeatId().getScheduleId().getDeparutreTime());
		     		confirmTicketDto.setArrivalTime(tic.getSeatId().getScheduleId().getArrivalTime());
		     		confirmTicketDto.setDestination(tic.getSeatId().getScheduleId().getDestination());
		     		confirmTicketDto.setSource(tic.getSeatId().getScheduleId().getSource());
		     		confirmTicketDto.setPassangerDto(passangerDtoList);
		     		ConfirmTicketDtoList.add(confirmTicketDto);
		     		
				}

		
		return ConfirmTicketDtoList;
	}
	@Override
	public ApiResponse uploadAdharImage(Long id, MultipartFile image) throws IOException {
		Passanger passanger = passrepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Invalid passanger id"));
		
		passanger.setAdharImage(image.getBytes());

		return new ApiResponse("image uploded succsfuly");
	}
	@Override
	public ApiResponse uploadPassPortImage(Long id, MultipartFile image) throws IOException {
		
Passanger passanger = passrepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Invalid passanger id"));
		
		passanger.setAdharImage(image.getBytes());

		return new ApiResponse("image uploded succsfuly");	}
	@Override
	public byte[] downAdharImage(Long id) throws IOException {
		Passanger passanger = passrepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Invalid passanger id"));
		return passanger.getAdharImage();
	}
	@Override
	public byte[] downPassportImage(Long id) throws IOException {
		Passanger passanger = passrepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Invalid passanger id"));
		return passanger.getPassportImage();
	}

	@Override
	public ApiResponse cancelTicket(Long id) {
		Ticket ticss = ticketRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Invalid person id"));
		ticss.setTicketStatus(StatusType.REJECTED);
	
		Seat set = seatRepo.findById(ticss.getSeatId().getId()).orElseThrow(() -> new ResourceNotFoundException("Invalid person id"));
		List<Passanger> listofPassanger=passrepo.findAllByTicketId(ticss);

		set.setTotalBooked( set.getTotalBooked()-listofPassanger.size()); 
		for (Passanger passanger : listofPassanger) {
			 SeatSendDetailDto seatSendDTo=new SeatSendDetailDto();
			 passanger.setSeatNumber(0l);
		   	  seatSendDTo.setPassangerId(passanger.getId());
		   	  seatSendDTo.setSeatingNumber(passanger.getSeatNumber());
		   	  seatSendDTo.setSeatTypeNumber(set.getId());

		   	  
		   	  boolean check=putRequest(seatSendDTo);
			
		}
		
		
		return null;
	}
	
	

	
}
