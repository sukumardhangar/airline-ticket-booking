
function Seats(props)
{

    const seat=props.Seatss;
    if(seat.passangerId > 0){
    return(  <div className="box" style={{backgroundColor:"blue"}} value={seat.passangerId} id={seat.seatingNumber} key={seat.seatingNumber} >{seat.seatingNumber}</div>)
    }
    else
    {
        // return(  <div className="box" style={{backgroundColor:"green"}} value={seat.passangerId} id={seat.seatingNumber}  onClick={()=>props.selectDeselect(seat.seatingNumber,seat.passangerId)}>{seat.seatingNumber} </div>)

    return (<div
        key={seat.seatingNumber}
        className="box"
        style={{ backgroundColor: props.divColors[seat.seatingNumber] }}
        onClick={() => props.changeBackgroundColor(seat.seatingNumber)} > {seat.seatingNumber}     </div>)
        
      


    }
}
export default Seats;