// import ProtectedNav from "./protectedNav";

// function ConfirmBooking()
// {
//         return(<>
//                   <ProtectedNav></ProtectedNav>

//            <div>
//             <h1>payment done </h1>
//            </div>
//            <div>
//             <a href="/"> GO to Home</a>
//            </div>
//         </>)
// }
// export default ConfirmBooking;
import ProtectedNav from "./protectedNav";
import { useLocation,useNavigate,Link } from 'react-router-dom';

function ConfirmBooking()
{
        const navigate=useNavigate();
        const data=useLocation().state;

        return(
        <div style={{backgroundColor:"yellow",height:"100vh"}}>
                  <ProtectedNav></ProtectedNav>

           <div style={{marginTop:150,textAlign:"center"}}>
            <h1>Congratulations your Payment is Done </h1>
           </div>
           <br>
           </br>
           <div style={{textAlign:"center"}}>
            <a href="/"> Go Back Home</a>
           </div>
        </div>
        )
}
export default ConfirmBooking;