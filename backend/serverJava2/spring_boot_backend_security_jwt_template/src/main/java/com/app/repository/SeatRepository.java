package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entity.Schedule;
import com.app.entity.Seat;
@Repository
public interface SeatRepository extends JpaRepository<Seat, Long> {
 
     List<Seat> findByScheduleId(Schedule schedule);
	
}
