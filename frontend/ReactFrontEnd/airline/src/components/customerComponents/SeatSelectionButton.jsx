import { Link } from 'react-router-dom';

function SeatSelectButton(props)
{
    console.log(props.seating.seatCount)
     if( props.seating.seatCount > props.seating.totalBooked)
        {
            return(
                
                <>
               <Link to="/seatingArrangment" state={{ seats:props.seating}} >choose the seats</Link>
                </>
                
            )
          
        }
        else
        {
            return( <></>)
        }
}
export default SeatSelectButton;





