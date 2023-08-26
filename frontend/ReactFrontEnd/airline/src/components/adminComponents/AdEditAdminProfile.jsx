import React, { useState,useEffect } from 'react';
import { useLocation,useNavigate,Link } from 'react-router-dom';
import AdminService from '../../services/AdminService';
import AdProfileNav from './AdProfileNav';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// import backgroundImage from './images/lufthansa.png'; // Adjust the path to your image
import { toast} from 'react-toastify';

function AdEditPorfile() {
    const [formData, setFormData] = useState({})

  const userId=sessionStorage.getItem("userId");

  useEffect(()=>
  {
    method();
   
  },[]
)
const method=()=>
{
    AdminService.
    GetAdminProfile(userId)
    .then((response)=>
    {
        console.log(response.data)
        toast.success(" Admin profile")

        setFormData(response.data[0]);
        
    })
    .catch((error)=>
    {
        toast.error("unable to use effect")
    });
    
}
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
const updateProfile=()=>
{

  const senddata=
  {
    "id": userId,
  "fname": formData.fname,
  "lname": formData.lname,
  "email": formData.email,
  "mob": formData.mob
  }

  AdminService.
  EditAdminProfile(senddata)
  .then((response)=>
  {
    console.log(response.data)

    toast.error("updated suucssfully")

    //   console.log(response.data)
    //   setMessage("updated successfuly")
   // method();
      
  })
  .catch((error)=>
  {
    toast.error("unable to load")
  });
}


  return (<>
  <AdProfileNav></AdProfileNav>
    <div
    className="container mt-5 d-flex justify-content-center align-items-center"
    style={{
      // backgroundImage: `url(${backgroundImage})`, // Apply the background image
      backgroundSize: 'cover', // Adjust the background size
      backgroundPosition: 'center', // Adjust the background position
    }}
  >
    <div className="container mt-5 d-flex justify-content-center align-items-center">
      <div className="w-50 p-4 shadow rounded" style={{ paddingTop: '600px' , backgroundColor:'pink' }}>
        <h1 className="text-center mb-4">Edit Profile</h1>
        <form>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="fname"
            name="fname"
            value={formData.fname}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="lname"
            name="lname"
            value={formData.lname}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
       
        <div className="mb-3">
          <label htmlFor="mobile" className="form-label">
            Mobile
          </label>
          <input
            type="text"
            className="form-control"
            id="mobile"
            name="mobile"
            value={formData.mob}
            onChange={handleChange}
          />
        </div>
     
        <button type="submit" className="btn btn-primary" onClick={updateProfile}>
          Update
        </button>
        <label htmlFor="mobile" className="form-label">
          </label>
      </form>
      </div>
     
    </div>
    </div>
    </>
  );
}

export default AdEditPorfile;
