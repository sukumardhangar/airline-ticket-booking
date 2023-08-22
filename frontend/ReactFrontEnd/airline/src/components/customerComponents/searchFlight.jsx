import Navbar from "./navbar";
import {useEffect,useState} from "react"
import {useNavigate} from 'react-router-dom'
const SearchFLight= ()=>
{

     const [data ,setData]=useState({source:"",destination:"",departureTime:""})
     const navigate=useNavigate();
     const onChangeCred=(args)=>
     {
         var copytext={...data};
         copytext[args.target.name]=args.target.value;
         setData(copytext);
     }

     const toFlightDetail=()=>{
   navigate('flightDetail',{state:data});
     }
   
      return (
        <div>
          <Navbar></Navbar>
          {/* Required meta tags */}
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          {/* Bootstrap CSS */}
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" />
          <title>Hello, world!</title>
        
          <div className="row">
            <div className="col-2" />
            <div className="col-8">
              <div >
                <form >
                  <div className="form-group row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Source</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" id="inputPassword"  value={data.source} name="source" onChange={onChangeCred}/>
                    </div>
                  </div>
                  <br />
                  <div className="form-group row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Destination</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control" id="inputPassword" value={data.destination} name="destination"onChange={onChangeCred} />
                    </div>
                  </div>
                  <div className="form-group row">
                     <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Destination</label>
                     <div className="col-sm-10">
                      <input type="datetime-local" value={data.departureTime} name="departureTime" onChange={onChangeCred}/> 
                     </div>
                  </div>
                  <br />
                  <center>
                  <a  className="btn btn-primary btn-lg active" role="button" aria-pressed="true" onClick={toFlightDetail}>Go To Flights</a>
                  </center>
                </form>
              </div>
            </div>
            <div className="col-2" />
          </div>
          {/* Optional JavaScript */}
          {/* jQuery first, then Popper.js, then Bootstrap JS */}
        </div>
      );
    }
;

export default SearchFLight;