package com.app.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.app.customException.ResourceNotFoundException;
import com.app.dto.ApiResponse;
import com.app.dto.ConfirmTicketDto;
import com.app.dto.PassangerDto;
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
	@Override
	public Ticket addTicket(TicketDto ticket) {
		// TODO Auto-generated method stub
	     
		Person per = personRepo.findById(ticket.getPersonId()).orElseThrow(() -> new ResourceNotFoundException("Invalid person id"));
		Seat set = seatRepo.findById(ticket.getSeatId()).orElseThrow(() -> new ResourceNotFoundException("Invalid person id"));

		Ticket t=new Ticket();
		t.setPersonId(per);
		t.setSeatId(set);
		return ticketRepo.save(t);
	}
	@Override
	public PassangerDto addPassanger(PassangerDto passan) {
		
		Passanger pas=mapper.map(passan, Passanger.class);
		Ticket tic = ticketRepo.findById(passan.getTicId()).orElseThrow(() -> new ResourceNotFoundException("Invalid person id"));
		Address address = addreRepo.findById(passan.getAddrId()).orElseThrow(() -> new ResourceNotFoundException("Invalid person id"));
        pas.setTicketId(tic);
        pas.setAddressId(address);
         Passanger passenger= passrepo.save(pas);
		
		return mapper.map(passenger, PassangerDto.class);
	}
	@Override
	public Ticket addTotalPrice(TicketDto ticketDto) {
		
		Ticket tic = ticketRepo.findById(ticketDto.getTicketId()).orElseThrow(() -> new ResourceNotFoundException("Invalid person id"));
	  	tic.setTotalPrice(ticketDto.getTotalPrice());
	  Ticket ticket=ticketRepo.save(tic);
		return ticket;
	}
	@Override
	public ConfirmTicketDto getConformTicket(Long id) {
		Ticket ticss = ticketRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Invalid person id"));
		ticss.setTicketStatus(StatusType.DONE);
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
	

	
}
