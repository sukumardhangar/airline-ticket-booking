import ProtectedNavOpr from "./protectedNavOpr";

function ScheduleAdded()
{
        return(<>
                  <ProtectedNavOpr></ProtectedNavOpr>

           <div>
            <h1>Schedule added </h1>
           </div>
           <div>
            <a href="/OprHome"> GO to Home</a>
           </div>
        </>)
}
export default ScheduleAdded;