package com.app.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entity.FlightDetail;
@Repository
public interface FlightRepository extends JpaRepository<FlightDetail, Long> {

	Optional <FlightDetail> findByAirlineNumber(Long id);
}
