package com.app.entity;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "passanger_adr")
@Getter
@Setter
public class Address extends BaseEntity {
	@Column(name = "adr_line1", length = 50)
	private String adrLine1;
	@Column(name = "adr_line2", length = 50)
	private String adrLine2;
	@Column(length = 20)
	private String city;
	@Column(length = 20)
	private String state;
	@Column(length = 20)
	private String country;
	@Column(length = 20)
	private String zipCode;
	
	@OneToMany(mappedBy = "addressId")
	private List<Passanger> passangerList = new ArrayList<>();
  public void addTicket(Passanger p)
  {
	  passangerList.add(p);
	  p.setAddressId(this);
	
  }
	
}
