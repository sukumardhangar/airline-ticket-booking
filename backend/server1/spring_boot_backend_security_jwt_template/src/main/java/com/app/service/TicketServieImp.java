package com.app.service;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.customException.ResourceNotFoundException;
import com.app.dto.PassangerDto;
import com.app.dto.PersonDto;
import com.app.dto.TicketDto;
import com.app.entity.Address;
import com.app.entity.Passanger;
import com.app.entity.Person;
import com.app.entity.Seat;
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

	
}
