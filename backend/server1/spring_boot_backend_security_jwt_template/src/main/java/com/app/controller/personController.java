package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entity.Person;
import com.app.service.personService;


@RestController
@RequestMapping("/person")
public class personController {

	@Autowired
	private personService personService;
	
	@PostMapping("/addperson")
	@PreAuthorize("hasAuthority('user:write')")
     public ResponseEntity<?> addPerson(@RequestBody Person person)
     {
    	 return ResponseEntity.status(HttpStatus.OK).body(personService.addNewPeson( person));
 	

     }
}
