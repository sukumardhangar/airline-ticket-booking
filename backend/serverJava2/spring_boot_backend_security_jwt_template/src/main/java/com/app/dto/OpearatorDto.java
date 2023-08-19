package com.app.dto;

import com.app.entity.Role;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OpearatorDto {

	  private String firstName;
	  private String lastName;
	  private String email;
	  private String password;
	  private String mob;
	  private Role role;
	  private String status;
	  private Long operatorId;

}
