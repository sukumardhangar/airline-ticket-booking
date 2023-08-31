

import React, { useEffect, useState } from "react";
import { useLocation,useNavigate,Link } from 'react-router-dom';
import './Boxsyle.css';
import Seats from "./seats";
import ProtectedNav from "./protectedNav";
import pic1 from './../../images/j51.jpg'

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
        <div style={{backgroundColor:"red",height:"100vh",backgroundImage:`url(${pic1})`}}>
                 <ProtectedNav></ProtectedNav>

       <center> <div id="container" style={{backgroundColor:"yellow",marginTop:100}}>
        {ListOfSeats.map(seat=>{
                return( <Seats  Seatss={seat} changeBackgroundColor={changeBackgroundColor} divColors={divColors}></Seats>)
        })}
     </div>
        </center> 
       
     <br></br>
     <br></br>
     <div >{message}</div>

<center><button className="btn btn-primary" value="add passanger" onClick={toAddPassanger}>Fill Passenger Details</button>
     </center>
     {/* <Link to={"/addPassanger"} state={{ seats:data}}  >add Passanger</Link> */}
     {/* <button type="button" class="btn btn-primary" onclick={toAddPassanger} >Add Passanger</button> */}
       
        </div>
    )
}
export default SeatingArrangment;