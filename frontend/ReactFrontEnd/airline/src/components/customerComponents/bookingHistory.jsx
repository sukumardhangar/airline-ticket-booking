import ProtectedNav from "./protectedNav";
import CustomerService from '../../services/CustomerService'
import { useEffect,useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import TicketStatusButton from "./ticketStatusButton";

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
                console.log("not error",response.data)

                setBookingData(response.data);
                
            })
            .catch((error)=>
            {
                console.log(" error")

                setMessage("no data")
                
            });
            
        },[]
    )
const cancelTicket=(id)=>
{
  CustomerService.
  CancelTicket(id)
  .then((response)=>
  {
      console.log("not error",response.data)

      alert('canceled');
      
  })
  .catch((error)=>
  {
      console.log(" error")

      setMessage("no data")
      
  });

}

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
            <th>price</th>
            <th>passangers</th>
            <th>status</th>

          </tr>
        </thead>
        <tbody>
          {bookingData.map(sched => (
            <tr key={sched.tickId}>
              <td>{sched.airlineName}</td>
              <td>{sched.source}</td>
              <td>{sched.destination} </td>

              <td>{sched.deparutreTime}</td>
              <td>{sched.arrivalTime}</td>
              <td>{sched.price}</td>
             
              <td>
                <table>
                  <thead>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Seat Number</th>
                  </thead>
                  <tbody>
                  {sched.passangerDto.map(pass=>
                {
                    return(
                        <tr>
                            <td>{pass.firstName}</td>
                            <td>{pass.lastName}</td>
                            <td>{pass.seatNumber}</td>


                        </tr>
                    )
                })}
                  </tbody>
              
                </table>
               
           </td>
           <td>
            <TicketStatusButton cancelTicket={cancelTicket} deparutreTime={sched.deparutreTime}  status={sched}  tickId={sched.tickId}/>
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