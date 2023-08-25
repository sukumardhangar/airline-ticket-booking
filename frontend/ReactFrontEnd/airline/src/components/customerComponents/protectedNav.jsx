import ProfileNav from './profilenav';
import Homenav from './homenav';
function ProtectedNav()
{
    const id=sessionStorage.getItem("userId");
    const role=sessionStorage.getItem("role");
    const jwt=sessionStorage.getItem("jwt");

    if(id!=null && role!=null && role==="CUSTOMER" && jwt!=null)
    {
        return(<ProfileNav/>)
    }
    else
    {
        return(<Homenav/>)
    }
}
export default ProtectedNav;