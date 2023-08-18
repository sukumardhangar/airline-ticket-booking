package com.app.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TicketDto {

private Long ticketId;
private Long personId;
private Long SeatId;
private Double totalPrice;

}
