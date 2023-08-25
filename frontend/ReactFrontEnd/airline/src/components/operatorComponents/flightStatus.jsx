function FlightStatus(props)
{
    

    console.log("in stsust",props.data)
        const currentDate = new Date();
        const flightTime = new Date(props.data.deparutreTime); // A future date and time

          if(flightTime.getTime() > currentDate.getTime())
           return(
               
               <>
               <button type="submit" className="btn btn-primary" onClick={()=>props.cancelSchedule(props.data.scheId)}> Cancel</button>               </>
               
           )
           else
           {
            return(<> <h5>traveled succefully</h5> </>)
           }
         
    
}
export default FlightStatus;