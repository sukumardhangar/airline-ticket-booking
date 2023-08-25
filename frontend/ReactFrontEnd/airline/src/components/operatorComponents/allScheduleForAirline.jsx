import ProtectedNavOpr from "./protectedNavOpr";
import {useEffect,useState} from "react"
import OperatorService  from '../../services/OperatorService';
import { Table, Button } from 'react-bootstrap';
import { useLocation,useNavigate,Link } from 'react-router-dom';
import AirlineInfo from './airLIneInfo'
function AllScheduleByAirline()
{
    const data=useLocation().state;
    console.log(data);
    const [message,setMessage]=useState("");

    const [airlineData,setAirlineData]=useState(null);
    useEffect(()=>
    {
        
        OperatorService.
        getFlightDetilsByAirLineNumber(data)
    .then((response)=>
    {
     console.log("asas",response.data)
     setAirlineData(response.data)
        
    })
    .catch((error)=>
    {
        console.log("error")
        
    });

        
    },[]
)
console.log("sdsd",airlineData);

    return(<>
     <ProtectedNavOpr />
    {airlineData ? (
      <AirlineInfo data={airlineData} ></AirlineInfo>
    ) : (
      <p>Not flight availble</p>
    )}
    
</>)
}
export default AllScheduleByAirline;
