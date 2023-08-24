import { useLocation,useNavigate,Link } from 'react-router-dom';
import CustomerService from '../../services/CustomerService'
import { useEffect,useState } from 'react';
import ProtectedNav from "./protectedNav";


function MakePayment()
{

    const star=useLocation();

    const finalData=star.state;
    console.log("hyg")
    const [messages,setMessage]=useState("");
    console.log(finalData)
    const navigate=useNavigate();

    const makeConfirm=()=>
    {
        const data=JSON.stringify(finalData)
        console.log(data);

        CustomerService.addBooking(data)
        .then((response)=>
        {
            console.log("not error")
            navigate('/confirmBooking');
           
            
        })
        .catch((error)=>
        {
            console.log(" error")
            
        });

    }
    

    

    return(<>
              <ProtectedNav></ProtectedNav>

<table class="table table-striped">
  <tbody>
    <tr>
      <th scope="row"></th>
      <td>Total</td>
      <td>{finalData.totalPrice}</td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td>Total passanger</td>
      <td>    {finalData.passangerDtoList.length}</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td><a  className="btn btn-primary btn-lg active" role="button" aria-pressed="true" onClick={makeConfirm}>Go To Flights</a></td>
      <td></td>
    </tr>
  </tbody>
</table>
        </>
    
    )

}
export default MakePayment;