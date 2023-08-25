package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.app.customException.ResourceNotFoundException;
import com.app.dto.ApiResponse;
import com.app.dto.LoginDTO;
import com.app.dto.PersonAuthDto;
import com.app.dto.PersonDto;
import com.app.entity.Person;
import com.app.entity.Role;
import com.app.repository.PersonRepository;

@Transactional
@Service
public class PersonServiceImp  implements personService {
	@Autowired
	private PasswordEncoder encoder;
    @Autowired
	private ModelMapper mapper;
	@Autowired
	private PersonRepository personRepo;
	@Override
	public ApiResponse addNewPeson(Person p) {
		p.setPassword(encoder.encode(p.getPassword()));

		personRepo.save(p);
		return new ApiResponse("person added");
	}
	@Override
	public PersonDto PersonDtailsService(Long id) {
        System.out.println("in getPerson "+id);
		Person person = personRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Invalid person id"));
        return mapper.map(person, PersonDto.class);
	}
	@Override
	public List<Person> getALl() {
		
		return personRepo.findAll();
	}
	@Override
	public ApiResponse EditPerson(Person p) {
			Person person = personRepo.findById(p.getId()).orElseThrow(() -> new ResourceNotFoundException("Invalid person id"));
              
			person.setFirstName(p.getFirstName());
			person.setLastName(p.getLastName());
			person.setEmail(p.getEmail());
			person.setMob(p.getMob());
			personRepo.save(person);
		return new ApiResponse("addded");
	}
	 @Override
	  public ApiResponse loginUser(LoginDTO credentials) {

	    //
		Person p= personRepo.findByEmailAndPassword(credentials.getEmail(),credentials.getPassword()).orElseThrow(() -> new ResourceNotFoundException("Invalid person id"));
	      
	      //
	      return new ApiResponse("login is successful");
	  }
	 
	 
	 
// jwt	 
	 
	 
		@Override
		public Person authenitcateUser(String email) {
			
			return personRepo.findByEmail(email)
					.orElseThrow(()-> new RuntimeException("Invalid Email"));
		}


		@Override
		public Long findUserId(String userName) {
			Person user = personRepo.findByEmail(userName)
					.orElseThrow(()-> new RuntimeException("Invalid Email"));
			
			return user.getId();
		}
	@Override
	public PersonAuthDto finfUserById(Long userId) {
		Person user = personRepo.findById(userId)
				.orElseThrow(()-> new RuntimeException("Invalid User Id"));
		
		PersonAuthDto userDto = mapper.map(user, PersonAuthDto.class);
		return userDto;
	}
}
