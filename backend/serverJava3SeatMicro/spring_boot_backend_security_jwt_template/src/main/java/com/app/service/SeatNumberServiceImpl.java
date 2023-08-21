package com.app.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.ApiResponse;
import com.app.dto.SeatDetailDto;
import com.app.entity.SeatNumber;
import com.app.entity.SeatValueList;
import com.app.repository.SeatNumberRepository;


@Service
public class SeatNumberServiceImpl implements SeatNumberService {

	@Autowired
	private SeatNumberRepository seatRepo;
	@Override
	public SeatNumber getSeatDetailBySeatTypeId(Long id) {
		// TODO Auto-generated method stub
		return seatRepo.findBySeatTypeNumber(id);
	}
	@Override
	public ApiResponse saveDetail(Long seatType,Long SeatCount) {
		// TODO Auto-generated method stub
		SeatNumber seatdetail=new SeatNumber();
		seatdetail.setSeatTypeNumber(seatType);
		List<SeatValueList>listOfseats=new ArrayList<SeatValueList>();
		for(Long i=1l;i<=SeatCount;i++)
		{
			SeatValueList seatValueList=new SeatValueList();
			seatValueList.setSeatingNumber(i);
			seatValueList.setPassangerId(0l);
			listOfseats.add(seatValueList);
			
		}
		seatdetail.setList(listOfseats);
		 seatRepo.save(seatdetail);
		 return new ApiResponse("added details");
	}
	@Override
	public List<SeatNumber> getAll() {
		// TODO Auto-generated method stub
		return seatRepo.findAll();
	}
	@Override
	public ApiResponse addPassangerId(SeatDetailDto detailDto) {
//	SeatNumber seat=seatRepo.findById(detailDto.getSeatTypeNumber()).orElseThrow(()-> new ResourceNotFoundException("resource Not found"));
		SeatNumber seats =  seatRepo.findBySeatTypeNumber(detailDto.getSeatTypeNumber());
		seatRepo.deleteBySeatTypeNumber(seats.getSeatTypeNumber());
		for (SeatValueList seatNumber : seats.getList()) 
		{
			if(seatNumber.getSeatingNumber()==detailDto.getSeatingNumber())
			{
				seatNumber.setPassangerId(detailDto.getPassangerId());
			}
			
		}
		seatRepo.save(seats);
//		System.out.println(seat.getSeatTypeNumber()+" "+seat.getList().size());
//		seat.getList().get(0).setPassangerId(detailDto.getPassangerId());
//		seatRepo.
		return new ApiResponse("updated succsefully");
	}
	@Override
	public Long getSeatNumberOfPassnager(SeatDetailDto detailDto) {
		SeatNumber seatNumber= seatRepo.findBySeatTypeNumber(detailDto.getSeatTypeNumber());

		for (SeatValueList seat : seatNumber.getList()) {
			
	       
			if(seat.getPassangerId().equals(detailDto.getPassangerId()))
			{
				System.out.println("inside seatnumber "+seat.getPassangerId()+" "+detailDto.getSeatTypeNumber());

				return seat.getSeatingNumber();
			}
		}
		
		return 785l;
	}

}
