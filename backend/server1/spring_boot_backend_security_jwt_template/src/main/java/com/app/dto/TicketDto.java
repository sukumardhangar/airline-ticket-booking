package com.app.dto;

import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TicketDto {

private Long personId;
private Long SeatId;
private Double totalPrice;
private List<PassangerDto> passangerDtoList;


}
