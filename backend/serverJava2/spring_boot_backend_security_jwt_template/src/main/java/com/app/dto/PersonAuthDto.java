package com.app.dto;

import com.app.entity.Role;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PersonAuthDto {
	 private String firstName;
	  private String lastName;
	  private String email;
	  private String mob;
	  private Role role;


}
