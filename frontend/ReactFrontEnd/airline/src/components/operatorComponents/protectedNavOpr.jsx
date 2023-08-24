import Homenav from '../customerComponents/homenav';
import OperatorNav from './operatorNav';
function ProtectedNavOpr()
{
    const islogged=true;
    if(islogged)
    {
        return(<OperatorNav/>)
    }
    else
    {
        return(<Homenav/>)
    }
}
export default ProtectedNavOpr;