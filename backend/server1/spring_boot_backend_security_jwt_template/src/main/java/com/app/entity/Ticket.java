package com.app.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import lombok.Getter;
import lombok.Setter;
@Entity
@Table(name = "ticket")
@Getter
@Setter
public class Ticket extends BaseEntity {
	
	@ManyToOne 
	@JoinColumn(name = "flight_id")
	private FlightDetail flightId;
	
	@ManyToOne 
	@JoinColumn(name = "person_id")
    private Person personId;
	
	@OneToMany(mappedBy = "ticketId")
	private List<Passanger> passangerList = new ArrayList<>();
  public void addPassenger(Passanger p)
  {
	  passangerList.add(p);
	  p.setTicketId(this);
	
  }

    
}
