package com.app.service;

import java.util.List;

import com.app.dto.ApiResponse;
import com.app.dto.LoginDTO;
import com.app.dto.PersonDto;
import com.app.entity.Person;

public interface personService 
{
  ApiResponse addNewPeson(Person p);
  PersonDto PersonDtailsService(Long id);
  ApiResponse EditPerson(Person p);
  List<Person> getALl();
   ApiResponse loginUser(LoginDTO credentials);
}
