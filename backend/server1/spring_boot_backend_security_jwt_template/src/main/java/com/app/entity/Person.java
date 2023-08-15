package com.app.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "person")
@Getter
@Setter
public class Person extends BaseEntity 
{
	@Column(name = "fname",length = 30)
  private String firstName;
	@Column(name = "lname",length = 30)
  private String lastName;
	@Column(name = "email",length = 30)
  private String email;
	@Column(name = "password",length = 30)
  private String password;
	@Column(name = "role",length = 30)
  private String role;
	@OneToMany(mappedBy = "personId")
	private List<Ticket> ticketList = new ArrayList<>();
	
	@OneToMany(mappedBy = "personId")
	private List<FlightDetail> flightDetailList = new ArrayList<>();
	
	 public void addFlightDetail(FlightDetail f)
	  {
		  flightDetailList.add(f);
		  f.setPersonId(this);
		
	  }
	 
  public void addTicket(Ticket t)
  {
	  ticketList.add(t);
	  t.setPersonId(this);
	
  }

  
}
