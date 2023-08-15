package com.app.entity;

import java.time.LocalDate;

import javax.persistence.*;

@Embeddable
public class Passport {
	@Column(name="passport_no",unique = true,length = 20)
	private String passportNo;
	@Column(name="issued_on")
	private LocalDate issuedOn;
	@Column(name="exp_date")
	private LocalDate expDate;
	@Column(length = 20)
	private String country;
}
