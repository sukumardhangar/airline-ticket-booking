import ProtectedNav from "./protectedNav";

function ConfirmBooking()
{
        return(<>
                  <ProtectedNav></ProtectedNav>

           <div>
            <h1>payment done </h1>
           </div>
           <div>
            <a href="/"> GO to Home</a>
           </div>
        </>)
}
export default ConfirmBooking;