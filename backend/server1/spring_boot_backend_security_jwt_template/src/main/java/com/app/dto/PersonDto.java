package com.app.dto;

import javax.persistence.Column;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import com.app.entity.Role;

public class PersonDto {

	  private String firstName;
	  private String lastName;
	  private String email;
	  private String password;
		@Enumerated(EnumType.STRING) 
	  private Role role;
}
