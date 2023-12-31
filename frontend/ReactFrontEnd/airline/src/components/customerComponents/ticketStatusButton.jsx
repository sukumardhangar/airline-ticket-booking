function TicketStatusButton(props)
{
    console.log(props.status)
            const flightTime = new Date(props.deparutreTime); // A future date and time

    console.log("dsd",flightTime.getTime());

       if( props.status=="DONE")
       {

        const currentDate = new Date();
         console.log(flightTime.getTime()," ",currentDate.getTime());
          if(flightTime.getTime() > currentDate.getTime())
           return(
               
               <>
               <button type="submit" className="btn btn-primary" onClick={()=>props.cancelTicket(props.tickId)}> Cancel</button>               </>
               
           )
           else
           {
            return(<> <h5>traveled succefully</h5> </>)
           }
         
       }
       else if( props.status === "REJECTED")
       {
        return(<> <h5>canceled ticket</h5> </>)
    }
       else
       {
           return( <>Booking Pending</>)
       }

}
export default TicketStatusButton;