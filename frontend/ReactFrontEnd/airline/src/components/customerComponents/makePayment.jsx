
import { useLocation, useNavigate, Link } from 'react-router-dom';
import CustomerService from '../../services/CustomerService'
import { useEffect, useState } from 'react';
import ProtectedNav from "./protectedNav";
import { toast} from 'react-toastify';

function MakePayment() {

  const star = useLocation();

  const finalData = star.state;
  console.log("hyg")
  const [messages, setMessage] = useState("");
  console.log(finalData)
  const navigate = useNavigate();

  const makeConfirm = () => {
    const data = JSON.stringify(finalData)
    console.log(data);

    CustomerService.addBooking(data)
      .then((response) => {
        toast.success("Payment Done")
        navigate('/confirmBooking', { state: { finalData } });


      })
      .catch((error) => {
        toast.error("something wrong")

      });

  }




  return (<div style={{backgroundColor:"blue",height:"100vh"}} >
    <ProtectedNav></ProtectedNav>

    <div className='row' style={{ marginTop: 100 }}>
      <div className='col-3'>

      </div>
      <div className='col-6'>

      <table class="table table-dark">
          
            <tr>
              
              <td>Total</td>
              <td>{finalData.totalPrice}</td>
            </tr>
            <tr>
              
              <td>Total Passenger</td>
              <td>    {finalData.passangerDtoList.length}</td>
            </tr>
            <tr>
             
              <td colSpan="2" style={{textAlign:'center'}}><button className="btn btn-primary btn-lg active" role="button" aria-pressed="true" onClick={makeConfirm}>confirm booking</button></td>
              
            </tr>
          
        </table>

      </div>
      <div className='col-3'>

      </div>
    </div>


  </div>

  )

}
export default MakePayment;