import React, { useState } from "react";
import { useLocation,useNavigate,Link } from 'react-router-dom';
import PassengerNew from "./passengernew";
import ProtectedNav from "./protectedNav";

function AllPassnger()
{
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
        "personId": 1,
        "totalPrice": totalPrice,
        "seatId": seats.seats.seatingNumberAndPassId.seatTypeNumber,
        "passangerDtoList": passData
      }

      navigate('/makePayment',{state:finalData});

  }
  const totalPrice=seats.seats.price *myList.length;

    return(<>
              <ProtectedNav></ProtectedNav>

     { myList.map(element => {
        console.log(element)
               return(<><PassengerNew seatingNumber={element} toAddPassangerDeatail={toAddPassangerDeatail}></PassengerNew></>)

     })
        }

<input type="button" value="make payment" onClick={addBooking}/>


        
    
        </>)


}
export default AllPassnger;