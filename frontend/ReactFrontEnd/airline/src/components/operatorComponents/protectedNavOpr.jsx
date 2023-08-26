import Homenav from '../customerComponents/homenav';
import OperatorNav from './operatorNav';
function ProtectedNavOpr()
{
    const id=sessionStorage.getItem("userId");
    const role=sessionStorage.getItem("role");
    if(id!=null && role!=null && role==="OPERATOR")
    {
        return(<OperatorNav/>)
    }
    else
    {
        return(<Homenav/>)
    }
    // const id=sessionStorage.getItem("userId");
    // const role=sessionStorage.getItem("role");
    // if( false)
    // {
    //     return(<OperatorNav/>)
    // }
    // else
    // {
    //     return(<Homenav/>)
    // }
}
export default ProtectedNavOpr;