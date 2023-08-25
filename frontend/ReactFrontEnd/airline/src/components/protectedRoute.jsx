import {Route} from 'react-router-dom';
import LoginPage from './customerComponents/login';
function ProtectedRoute(props)
{
  const id=sessionStorage.getItem("userId");
  if(id!=null)
  {


        return (<Route  path={props.path} 
                      element={<props.component/>}/>)
    
  }
  else
  {

           return(<LoginPage></LoginPage>)

  }

}
export default ProtectedRoute;