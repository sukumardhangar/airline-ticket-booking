
import { useLocation,useNavigate,Link } from 'react-router-dom';
import { useEffect,useState } from 'react';
import SeatSelectButton from './SeatSelectionButton'
import CustomerService from '../../services/CustomerService';
import { Table, Button } from 'react-bootstrap';
import ProtectedNav from "./protectedNav";
import pic1 from './../../images/d3.jpg';
import { toast} from 'react-toastify';


const SeatType=()=>
{

    const data=useLocation().state;
    const [seats ,setSeasts]=useState([]);
    const [message,setMessage]=useState("");
    const navigate=useNavigate();

    useEffect(()=>
        {
            
            console.log(data)
            CustomerService.
            getSeat(data.scheduleId)
            .then((response)=>
            {
                toast.success("Seat type selected")
                setSeasts(response.data);
                               
            })
            .catch((error)=>
            {
              toast.error("Flight not available") 
                
            });
            
        },[]
   )
  

    return (
        <>
      <ProtectedNav></ProtectedNav>

   <div style={{backgroundImage:`url(${pic1})`,height:"100vh"}}>
    <h1>{message}</h1>
    <div >
    </div>
    <div >
      <div className='row' style={{backgroundImage:`url(${pic1})`,height:"100vh"}}>
        <div className='col-2'>

        </div>
        <div className='col-8' style={{marginTop:100}}>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>SeatType</th>
            <th>Price (₹)</th>
            <th>Choose seats</th>

            
          </tr>
        </thead>
        <tbody>
          {seats.map(seat => (
            <tr key={seat.ScheduleId}>
              <td>{seat.seatType}</td>
              <td>{seat.price}</td>
              <td><button className='btn btn-info'><SeatSelectButton seating={seat} ></SeatSelectButton></button></td>
             
             
            </tr>
          ))}
        </tbody>
      </Table>
        </div>
        <div className='col-2'>

        </div>

        
      </div>
   
    </div>
     
    </div>         
        </>
    )
}
export default SeatType;