package com.app.entity;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;


import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "passanger")
@Getter
@Setter
public class Passanger extends BaseEntity {
	@Column(name = "fname",length = 30)
	  private String firstName;
		@Column(name = "lname",length = 30)
	  private String lastName;
     @Column
     private LocalDate dob;
     
     @Embedded
     private Passport Passport;
     @Lob
 	private byte[] passportImage;
     
     @Column(name="adhar_no",unique = true,length = 20)
 	private String adharNo;
     @Lob
  	private byte[] adharImage;
     @ManyToOne 
 	 @JoinColumn(name = "ticket_id")
     private Ticket ticketId;
     
   
     
     @ManyToOne 
 	@JoinColumn(name = "address_id")
     private Address addressId;
		
  
		
}
