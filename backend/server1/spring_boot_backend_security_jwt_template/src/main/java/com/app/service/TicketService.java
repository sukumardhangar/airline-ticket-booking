package com.app.service;

import com.app.dto.PassangerDto;
import com.app.dto.TicketDto;
import com.app.entity.Passanger;
import com.app.entity.Ticket;

public interface TicketService {

	Ticket addTicket(TicketDto ticket);
	PassangerDto addPassanger(PassangerDto passanger);
}
