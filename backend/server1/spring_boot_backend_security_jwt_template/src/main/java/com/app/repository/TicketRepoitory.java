package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entity.Person;
import com.app.entity.Ticket;
@Repository
public interface TicketRepoitory extends JpaRepository<Ticket, Long> {

	List<Ticket> findByPersonId(Person Person);
}
