import ProtectedNavOpr from "./protectedNavOpr";
import {useEffect,useState} from "react"
import OperatorService  from '../../services/OperatorService';
import { Table, Button } from 'react-bootstrap';
import AllAirLineInfoOpr from "./allAirLinInfoOfOpr";
function GetAllFlightDetailFOrOperator()
{
    const [message,setMessage]=useState("");

    const [airlineData,setAirlineData]=useState(null);
    useEffect(()=>
    {
        
        OperatorService.
        getAllFLightOfOperator(1)
    .then((response)=>
    {
     console.log("asas",response.data)
     setAirlineData(response.data)
        
    })
    .catch((error)=>
    {
         alert("load after some time")        
    });

        
    },[]
)
console.log("sdsd",airlineData);

    return(<>
     <ProtectedNavOpr />
    {airlineData ? (
      <AllAirLineInfoOpr allData={airlineData} />
    ) : (
      <p>flight not availble</p>
    )}
    
</>)
}
export default GetAllFlightDetailFOrOperator;
