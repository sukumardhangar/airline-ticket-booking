import React, { useState,useEffect } from "react";
import { useLocation,useNavigate,Link } from 'react-router-dom';
import './Boxsyle.css';
import Seats from "./seats";
import ProtectedNav from "./protectedNav";

function SeatingArrangment()
{
    useEffect(()=>{

        const userId= sessionStorage.getItem("userId");
        console.log(userId)
        if(userId==null)
        {
         navigate('/login');
     
        }
     },[])
    const [message,setMessage]=useState("");
    const navigate=useNavigate();
//    const [path,setPath]=useState("");
   // const selectedSeatSet=new Set();
    const data=useLocation().state;
    const ListOfSeats=data.seats.seatingNumberAndPassId.list;

    const [divColors, setDivColors] = useState(new Array(ListOfSeats.length).fill('pink'));
console.log(divColors[0])
  const changeBackgroundColor = (seatingNumber) => {
    console.log(seatingNumber)
    const updatedDivColors = [...divColors];
    // Toggle between green and red
    updatedDivColors[seatingNumber] = updatedDivColors[seatingNumber] === 'green' ? 'pink' : 'green';
    setDivColors(updatedDivColors);

 
    
  };
const toAddPassanger=()=>
{

    const arr=[];
    for(var i=0;i<divColors.length;i++)
    {
      if(divColors[i]=="green")
      {
          arr.push(i);
      }
    }
    console.log(arr)

    if(arr.length>0)
    {
      
            navigate('/addPassangers',{state:{data:data,arrat:arr}});
                     
    }
    else
    {
        setMessage("select At least one seat");
    }
}
 
  


    return(
        <>
                 <ProtectedNav></ProtectedNav>

        <div id="container" >
        {ListOfSeats.map(seat=>{
                return( <Seats  Seatss={seat} changeBackgroundColor={changeBackgroundColor} divColors={divColors}></Seats>)
        })}
     </div>
     <br></br>
     <div >{message}</div>
     <input type="button" value="add passanger" onClick={toAddPassanger}/>
     {/* <Link to={"/addPassanger"} state={{ seats:data}}  >add Passanger</Link> */}
     {/* <button type="button" class="btn btn-primary" onclick={toAddPassanger} >Add Passanger</button> */}
       
        </>
    )
}
export default SeatingArrangment;
