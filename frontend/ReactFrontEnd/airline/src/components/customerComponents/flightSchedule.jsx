import { useLocation,useNavigate,Link } from 'react-router-dom';
import { useEffect,useState } from 'react';
 import CustomerService from '../../services/CustomerService'
 import { Table, Button } from 'react-bootstrap';
 import ProtectedNav from "./protectedNav";

const FlightSchedule=()=>
{
    const data=useLocation().state;
    const [schedule ,setSchedule]=useState([]);
    const [message,setMessage]=useState("");
    const navigate=useNavigate();

    useEffect(()=>
        {
            
            console.log(data)
            CustomerService.
            GetSchedule(data)
            .then((response)=>
            {
                setSchedule(response.data);
               
                
            })
            .catch((error)=>
            {
                setMessage("flight not availbale")
                
            });
            
        },[]
   )
 

    return (
        <>
         
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
          {schedule.map(sched => (
            <tr key={sched.scheduleId}>
              <td>{sched.airlineName}</td>
              <td>{sched.source}</td>
              <td>{sched.destination} </td>

              <td>{sched.departureFormatter}</td>
              <td>{sched.arraivalFormatter}</td>
              <td>{sched.arrOfDuration[0]}:{sched.arrOfDuration[1]}:{sched.arrOfDuration[2]}</td>
              <td>
               
                <Link to="/SeatType" state={{scheduleId:sched.scheduleId}}>click </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
     
    </div>         
        </>
    )
}
 export default FlightSchedule;