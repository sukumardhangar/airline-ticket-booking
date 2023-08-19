package com.app.service;

import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.app.dto.ApiResponse;
import com.app.dto.ConfirmTicketDto;
import com.app.dto.PassangerDto;
import com.app.dto.TicketDto;
import com.app.entity.Ticket;


public interface TicketService {

	ApiResponse addBooking(TicketDto ticket);

	ConfirmTicketDto  getConformTicket( Long id);
     List<ConfirmTicketDto>	getTicketHistory(Long id);
     
     ApiResponse uploadAdharImage(Long id, MultipartFile image) throws IOException;
     
     ApiResponse uploadPassPortImage(Long id, MultipartFile image) throws IOException;

 	byte[] downAdharImage(Long id) throws IOException;
 	
 	byte[] downPassportImage(Long id) throws IOException;

}
