import ProtectedNavOpr from "./protectedNavOpr";
import {useEffect,useState} from "react"
import OperatorService  from '../../services/OperatorService';
import { Table, Button } from 'react-bootstrap';
import FlightStatus from "./flightStatus";
import {useNavigate} from 'react-router-dom'

function SearchFlightByAirlineNumber()
{
    const [data ,setData]=useState(0)
    const navigate=useNavigate();

  

    const [message,setMessage]=useState("");

    const onChangeCred=(args)=>
    {
        setData(args.target.value)
    }

    const seeShedule=()=>
    {
        navigate('/allScheduleForAirLine',{state:data});



    }
    return (<>
    <ProtectedNavOpr/>
    <div className="form-group row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Enter flight number</label>
                    <div className="col-sm-10">
                      <input type="number" className="form-control" id="inputPassword"  value={data} name="source" onChange={onChangeCred}/>
                    </div>
     </div>
     <div>
        <center><button  class="btn btn-outline-success" type="submit" style={{margin:15}} onClick={seeShedule}>See Schedule</button></center>
     </div>
     {/* <div style={{display:"inline-block" ,margin:"100px"}}>First Div</div>
     <div style={{display:"inline-block" ,margin:"100px"}}>First Div</div>
     <div style={{display:"inline-block" ,margin:"100px"}}>First Div</div> */}

    </>)
}
export default SearchFlightByAirlineNumber;