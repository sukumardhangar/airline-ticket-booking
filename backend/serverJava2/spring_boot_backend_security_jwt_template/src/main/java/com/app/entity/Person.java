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
	@Column(name = "password")
  private String password;
	@Column(name = "mob",length = 30)
	  private String mob;
	@Enumerated(EnumType.STRING) 
	@Column(name = "role",length = 30)
  private Role role;
	@Column(name = "status",length = 30)
	  private String status;
	
	
	
  

  
}
