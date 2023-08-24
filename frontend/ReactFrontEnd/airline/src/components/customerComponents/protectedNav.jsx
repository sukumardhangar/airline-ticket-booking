import ProfileNav from './profilenav';
import Homenav from './homenav';
function ProtectedNav()
{
    const islogged=true;
    if(islogged)
    {
        return(<ProfileNav/>)
    }
    else
    {
        return(<Homenav/>)
    }
}
export default ProtectedNav;