package com.app.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.app.entity.SeatNumber;

@Repository
public interface SeatNumberRepository extends MongoRepository<SeatNumber, Long> {

	SeatNumber findBySeatTypeNumber(Long id);
	
	SeatNumber   findBySeatTypeNumberAndListSeatingNumber(Long id,long seatigid);
	            void deleteBySeatTypeNumber(Long id);
}
