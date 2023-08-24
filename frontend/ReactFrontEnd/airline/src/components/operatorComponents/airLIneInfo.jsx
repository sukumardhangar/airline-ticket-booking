import React from 'react';
import { Table, Button } from 'react-bootstrap';

const AirlineInfo = ({ data }) => {
  return (
    <div>
<div className="form-group row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Airline Name</label>
                    <div className="col-sm-10">
                    {data.airlineName}
                    </div>
     </div>

     <div className="form-group row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Category</label>
                    <div className="col-sm-10">
                    {data.category}
                    </div>
     </div>
    
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Source</th>
            <th>Destination</th>
            <th>Deparutre Time</th>
            <th>Arrival Time</th>
            <th>Seat detail</th>

          </tr>
        </thead>
        <tbody>
        {data?.listOfScedules.map(schedule => (
            <tr >
            <td>{schedule.source}</td>
            <td>{schedule.destination} </td>
            <td>{schedule.deparutreTime}</td>
            <td>{schedule.arrivalTime}</td>
            <td>
            <Table striped bordered hover>
                <thead>
              <tr>
            <th>Seat Type</th>
            <th>price</th>
            <th>Seat Count</th>
            <th>Total Booked</th>
          </tr>
           </thead>
           <tbody>
        {schedule.listOfSeats.map(seat => (
            <tr >
            <td>{seat.seatType}</td>
            <td>{seat.price} </td>
            <td>{seat.seatCount}</td>
            <td>{seat.TotalBooked}</td>
            <td>
             
            </td>
          </tr>
            
       
      ))}
        </tbody>
      </Table>
             
            </td>
          </tr>
            
       
      ))}
        </tbody>
      </Table>
      
     
    </div>
  );
};

export default AirlineInfo;
