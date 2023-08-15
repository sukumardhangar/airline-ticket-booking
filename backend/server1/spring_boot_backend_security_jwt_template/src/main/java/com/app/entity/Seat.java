package com.app.entity;

import java.util.List;

import javax.persistence.*;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "seat")
@Getter
@Setter
public class Seat extends BaseEntity
{
	@Enumerated(EnumType.STRING) // => col type : varchar : enum constant name
	@Column(name = "seat_type", length = 20)
	private SeatType seatType;
   @Column
	private Double price;
   @Column
  	private Integer seatCount;
   @ManyToOne 
	@JoinColumn(name = "schedule_id")
   private Schedule scheduleId;
}
