package com.app.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entity.Person;
@Repository
public interface PersonRepository extends JpaRepository<Person,Long> {
      Person findByFirstName(String name);
     Optional<Person> findByEmailAndPassword(String email,String pass);
     Optional<Person> findByEmail(String email);
}
