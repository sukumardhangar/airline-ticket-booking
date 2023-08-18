package com.app.dto;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Lob;

import com.app.entity.Passport;
import com.app.entity.Ticket;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PassangerDto {

	  private Long age;
	  private String gender;
      private String firstName;
	  private String lastName;
      private LocalDate dob;  
      private Passport Passport;
	  //private byte[] passportImage;
      private String adharNo;
	//  private byte[] adharImage;
	  private Long ticId;
	  private Long addrId;

}
