package com.app.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.ApiResponse;
import com.app.entity.Person;
import com.app.repository.PersonRepository;

@Transactional
@Service
public class PersonServiceImp  implements personService {

	@Autowired
	private PersonRepository personRepo;
	@Override
	public ApiResponse addNewPeson(Person p) {
		
		personRepo.save(p);
		return new ApiResponse("person added");
	}

}
