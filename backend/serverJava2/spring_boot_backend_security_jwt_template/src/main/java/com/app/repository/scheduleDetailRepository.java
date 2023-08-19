package com.app.repository;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.entity.FlightDetail;
import com.app.entity.Schedule;
@Repository
public interface scheduleDetailRepository  extends JpaRepository<Schedule, Long>{
    
	@Query("select s from Schedule s  where s.source=?1 ")
	List<Schedule> getAllSchedule(String source);
	 
	List<Schedule> findBySourceAndDestination(String src,String dest);
	List<Schedule> findByFlightDetailId(FlightDetail detail);

}
