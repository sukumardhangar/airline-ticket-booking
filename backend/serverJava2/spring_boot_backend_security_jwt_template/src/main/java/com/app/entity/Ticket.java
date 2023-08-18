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
	@JoinColumn(name = "Seat_id")
	private Seat SeatId;
	
	@ManyToOne 
	@JoinColumn(name = "person_id")
    private Person personId;
	
	@Column
	private Double totalPrice;
	
	@Column
	private StatusType ticketStatus;
	

    
}
