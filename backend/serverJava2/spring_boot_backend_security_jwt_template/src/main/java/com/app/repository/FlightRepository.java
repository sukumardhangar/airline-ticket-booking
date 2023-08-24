package com.app.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entity.FlightDetail;
import com.app.entity.Person;
@Repository
public interface FlightRepository extends JpaRepository<FlightDetail, Long> {

	Optional <FlightDetail> findByAirlineNumber(Long id);
	List <FlightDetail> findByPersonId(Person p);

}
