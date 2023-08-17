package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entity.Ticket;
@Repository
public interface TicketRepoitory extends JpaRepository<Ticket, Long> {

	
}
