package com.app.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "flightDetail")
@Getter
@Setter
public class FlightDetail extends BaseEntity
{
	@Column(name = "airline_name",length = 30)
	  private String airlineName;
		@Column(name = "category",length = 30)
	  private String category;
		
		@ManyToOne 
		@JoinColumn(name = "person_id")
	    private Person personId;
		
		
		@OneToMany(mappedBy = "flightDetailId")
		private List<Schedule> scheduleList = new ArrayList<>();
		 public void addSchedule(Schedule s)
		  {
			 scheduleList.add(s);
			 s.setFlightDetailId(this);
			
		  }
		 
		 
		 @OneToMany(mappedBy = "flightId")
			private List<Ticket> ticketList = new ArrayList<>();
			 public void addTicket(Ticket t)
			  {
				 ticketList.add(t);
				 t.setFlightId(this);
				
			  }
}
