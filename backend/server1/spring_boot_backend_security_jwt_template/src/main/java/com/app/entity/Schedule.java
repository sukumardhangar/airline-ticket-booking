package com.app.entity;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "schedule")
@Getter
@Setter
public class Schedule extends BaseEntity
{
	@Column
  private LocalDateTime arrivalTime;
	@Column
  private LocalDateTime deparutreTime;
	@Column(name = "source",length = 30)
  private String source;
	@Column(name = "destination",length = 30)
  private String destination;

	@OneToMany(mappedBy = "scheduleId")
	private List<Seat> seatList = new ArrayList<>();
	 public void addSeats(Seat s)
	  {
          seatList.add(s);
		 s.setScheduleId(this);
		
	  }
	
	@ManyToOne 
	@JoinColumn(name = "flightDetail_id")
    private FlightDetail flightDetailId;
}
