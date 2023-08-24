package com.app.dto;

import javax.persistence.Column;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import com.app.entity.Role;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter
@Setter
@NoArgsConstructor
public class PersonDto {

	  private String firstName;
	  private String lastName;
	  private String email;
	  private String mob;
	  
		
}
