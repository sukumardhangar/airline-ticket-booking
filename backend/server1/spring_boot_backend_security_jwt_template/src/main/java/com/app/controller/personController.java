package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ApiResponse;
import com.app.dto.LoginDTO;
import com.app.entity.Person;
import com.app.service.personService;


@RestController
@RequestMapping("/person")
public class personController {

	@Autowired
	private personService personService;
	
	@PostMapping("/addperson")
     public ResponseEntity<?> addPerson(@RequestBody Person person)
     {
    	 return ResponseEntity.status(HttpStatus.OK).body(personService.addNewPeson( person));
     }
	@GetMapping("/getPerson/{id}")
    public ResponseEntity<?> personDetails(@PathVariable Long id )
    {
   	 return ResponseEntity.status(HttpStatus.OK).body(personService.PersonDtailsService(id));
    }
	@GetMapping("/getPersonAll")
    public ResponseEntity<?> getPersonDetailsList( )
    {
   	 return ResponseEntity.status(HttpStatus.OK).body(personService.getALl());
    }
	@PutMapping("/EditPerson")
	public ResponseEntity<?> editPersonDetails(@RequestBody Person person  )
    {
   	 return ResponseEntity.status(HttpStatus.OK).body(personService.EditPerson(person));
    }
	
	 @PostMapping("/login")
	  public ResponseEntity<?> loginEmployee(@RequestBody LoginDTO credentials){
	    
	    //
	    System.out.println("inside loginEmployee userControler");
	    
	    //
	    return ResponseEntity.status(HttpStatus.OK).body(personService.loginUser(credentials));
	  }
	
}
