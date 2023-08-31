

import { useLocation,useNavigate,Link } from 'react-router-dom';
import { useEffect,useState } from 'react';
 import CustomerService from '../../services/CustomerService'
 import { Table, Button } from 'react-bootstrap';
 import ProtectedNav from "./protectedNav";
import pic1 from './../../images/p1.jpg'
import { toast} from 'react-toastify';

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
              toast.success("Showing matching schedule")
              setSchedule(response.data)
                
               
                
            })
            .catch((error)=>
            {
              toast.error("something is wrong") 
                
            });
            
        },[] )
 

    return (
        <>
         
         <div style={{backgroundImage:`url(${pic1})`,height:"100vh"}}>
         <ProtectedNav></ProtectedNav>
   
   <div >
   <div className='row' style={{marginTop:100}}>
    <div className='col-1'>

    </div>
    <div className='col-10' >
    <Table striped bordered hover>
          <thead>
            <tr>
              <th>Airline</th>
              <th>Source</th>
              <th>Destination</th>
              <th>Deparutre Time</th>
              <th>Arrival Time</th>
              <th>Duration</th>
              <th></th>
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
                  <center><button className='btn btn-info'><Link to="/SeatType" state={{scheduleId:sched.scheduleId}}>Book Ticket</Link></button>
                 </center>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

    </div>
    <div className='col-1'>

    </div>
      
      
      </div>
   </div>
     
    </div>         
        </>
    )
}
 export default FlightSchedule;