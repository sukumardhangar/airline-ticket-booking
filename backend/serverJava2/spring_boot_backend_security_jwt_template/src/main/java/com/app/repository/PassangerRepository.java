package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entity.Passanger;
import com.app.entity.Ticket;
@Repository
public interface PassangerRepository extends JpaRepository<Passanger, Long> {

	List<Passanger> findAllByTicketId(Ticket ticket);
}
