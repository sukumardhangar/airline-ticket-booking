
import pic1 from '../../images/wel3.jpg'
import ProtectedNav from "./protectedNav";
import React , { useState }  from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from 'react-router-dom'

const SearchFLight = () =>
{

  const navigate=useNavigate();

  const [formData, setFormData] = useState({
    source: '',
    destination: '',
    departureTime : ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const toFlightDetail=()=>{
    navigate('/flightDetail',{state:formData});
      }

      return (
        <div style={{backgroundColor:"orange"}}>
        <ProtectedNav></ProtectedNav>

<div class="container" >
<div class="row">
  <div class="col-1">
    
  </div>
  <div class="col-10" style={{backgroundColor:"black"}}>
    <div style={{backgroundColor:"#FD2D00"}}>
      <div  style={{margin:20 , padding:20 }}>
      <div className="row" >
        <div className="col">
        <label for="exampleInputEmail1">Source</label>
                    <input type="text" class="form-control" name="source" value={formData.source} onChange={handleChange} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Source" />
                    <small id="emailHelp" class="form-text text-muted"></small>
        </div>
        <div className="col">
        <label for="exampleInputEmail1">Destination</label>
                    <input type="text" class="form-control" name="destination" value={formData.destination} onChange={handleChange} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Destination" />
                    <small id="emailHelp" class="form-text text-muted"></small>
        </div>
        {/* <div className="col">
        <label for="exampleInputEmail1">No of passengers</label>
                    <input type="number" class="form-control" name="passengerCount" value={formData.passengerCount} onChange={handleChange} id="exampleInputEmail1"  aria-describedby="emailHelp" placeholder="Passengers" />
                    <small id="emailHelp" class="form-text text-muted"></small>
        </div> */}
        <div className="col">
        <label for="exampleInputEmail1">Date</label>
                    <input type="datetime-local" class="form-control" name="departureTime" value={formData.departureTime} onChange={handleChange} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Travel Date" />
                    <small id="emailHelp" class="form-text text-muted"></small>
        </div>
      </div>
      <br></br>
      <div className="row" style={{textAlign :"center"}} >
        <div className="col">
        <button type="submit" class="btn btn-primary" onClick={toFlightDetail}>Search</button>
        </div>
        
      </div>
    </div>
    </div>
  </div>
  <div class="col-1">
    
  </div>
</div>

</div>
<div className='row'  >
  <img src={pic1} alt="" style={{height:600}} /></div></div>
      );
    }
 ;

 export default SearchFLight;