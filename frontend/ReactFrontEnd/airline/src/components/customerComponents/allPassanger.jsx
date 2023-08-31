
import React, { useState } from "react";
import { useLocation,useNavigate,Link } from 'react-router-dom';
import PassengerNew from "./passengernew";
import ProtectedNav from "./protectedNav";

function AllPassnger()
{
  const userId = sessionStorage.getItem("userId");

    const allState=useLocation().state;
   const seats=allState.data;
   const selectedSeats=allState.arrat;
   const navigate=useNavigate();

   console.log("Dsdd ",allState)
   console.log("data ",seats.seats.price
   )
   console.log("arrat",selectedSeats)
   var myList=[];
   selectedSeats.forEach(element => {
    myList.push(element);
   });
   console.log("list",myList)
   const passData=[];
 
   const toAddPassangerDeatail=(pass)=>
   {
    console.log(pass);
    passData.push(pass);
   }

  const addBooking=()=>
  {
    const finalData=
    {
        "personId": userId,
        "totalPrice": totalPrice,
        "seatId": seats.seats.seatingNumberAndPassId.seatTypeNumber,
        "passangerDtoList": passData
      }

      navigate('/makePayment',{state:finalData});

  }
  const totalPrice=seats.seats.price *myList.length;

    return(<div style={{backgroundColor:"black"}}>
              <ProtectedNav></ProtectedNav>

     { myList.map(element => {
        console.log(element)
               return(<><PassengerNew seatingNumber={element} toAddPassangerDeatail={toAddPassangerDeatail}></PassengerNew></>)

     })
        }

<center><button className="btn btn-primary" value="make payment" onClick={addBooking}>Go to Payment</button>
</center>
<br></br>

        
    
        </div>)


}
export default AllPassnger;