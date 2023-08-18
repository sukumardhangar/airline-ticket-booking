package com.app.dto;

import java.time.LocalDateTime;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter
@Setter
@NoArgsConstructor
public class BookingDto {
private String source;
private String Destination;
private LocalDateTime DepartureTime;

}
