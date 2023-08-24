import ProtectedNav from "./protectedNav";
import CustomerService from '../../services/CustomerService'
import { useEffect,useState } from 'react';
import { Table, Button } from 'react-bootstrap';

function BookingHistory()
{

    const personId=1;
    const [bookingData,setBookingData]=useState([]);
    const [message,setMessage]=useState("");
    useEffect(()=>
        {
            
            CustomerService.
            getTicketHistory(personId)
            .then((response)=>
            {
                console.log("not error")

                setBookingData(response.data);
                
            })
            .catch((error)=>
            {
                console.log(" error")

                setMessage("no data")
                
            });
            
        },[]
    )
     return(<>

<div>
         <ProtectedNav></ProtectedNav>
    <div>
    </div>
    <div>
    <Table striped bordered hover>
        <thead>
          <tr>
            <th>Airline</th>
            <th>Source</th>
            <th>Destination</th>
            <th>Deparutre Time</th>
            <th>Arrival Time</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {bookingData.map(sched => (
            <tr key={sched.scheduleId}>
              <td>{sched.airlineName}</td>
              <td>{sched.source}</td>
              <td>{sched.destination} </td>

              <td>{sched.deparutreTime}</td>
              <td>{sched.arrivalTime}</td>
              <td>{sched.arrivalTime}</td>
              <td>
                <table>
                {sched.passangerDto.map(pass=>
                {
                    return(
                        <tr>
                            <td>{pass.firstName}</td>
                            <td>{pass.lastName}</td>
                            <td>{pass.SeatNumber}</td>


                        </tr>
                    )
                })}
                </table>
               
                             </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
     
    </div> 
     </>)
}
export default BookingHistory;