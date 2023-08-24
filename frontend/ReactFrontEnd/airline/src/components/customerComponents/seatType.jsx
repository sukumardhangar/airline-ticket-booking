import { useLocation,useNavigate,Link } from 'react-router-dom';
import { useEffect,useState } from 'react';
import SeatSelectButton from './SeatSelectionButton'
import CustomerService from '../../services/CustomerService';
import { Table, Button } from 'react-bootstrap';
import ProtectedNav from "./protectedNav";


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
                setSeasts(response.data);
                               
            })
            .catch((error)=>
            {
                setMessage("flight not availbale")
                
            });
            
        },[]
   )
  

    return (
        <>
      <ProtectedNav></ProtectedNav>

   <div>
    <h1>{message}</h1>
    <div>
    </div>
    <div>
    <Table striped bordered hover>
        <thead>
          <tr>
            <th>seatType</th>
            <th>price</th>
            <th>Choose seats</th>

            
          </tr>
        </thead>
        <tbody>
          {seats.map(seat => (
            <tr key={seat.ScheduleId}>
              <td>{seat.seatType}</td>
              <td>{seat.price}</td>
              <td><SeatSelectButton seating={seat} ></SeatSelectButton></td>
             
             
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
     
    </div>         
        </>
    )
}
export default SeatType;