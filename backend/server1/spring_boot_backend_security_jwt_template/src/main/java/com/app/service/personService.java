package com.app.service;

import java.util.List;

import com.app.dto.ApiResponse;
import com.app.dto.LoginDTO;
import com.app.dto.PersonAuthDto;
import com.app.dto.PersonDto;
import com.app.entity.Person;

public interface personService 
{
  ApiResponse addNewPeson(Person p);
  PersonDto PersonDtailsService(Long id);
  ApiResponse EditPerson(Person p);
  List<Person> getALl();
   ApiResponse loginUser(LoginDTO credentials);
   
   
   
 //Authenticate User (LogIn)
 	Person authenitcateUser(String email);
 	
 	
 	
 	//find userId By email
 	Long findUserId(String userName);
 	
	//get user by ID
 	PersonAuthDto finfUserById(Long userId);
   
}
