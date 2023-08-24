import React, { useState,useEffect } from 'react';
import { useLocation,useNavigate,Link } from 'react-router-dom';
import CustomerService from '../../services/CustomerService'
import ProtectedNav from './protectedNav';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// import backgroundImage from './images/lufthansa.png'; // Adjust the path to your image

function EditPorfile() {

  const [message,setMessage]=useState("");

  useEffect(()=>
  {
      
      CustomerService.
      getPerson(1)
      .then((response)=>
      {
          console.log(response.data)
          setFormData(response.data);
         
          
      })
      .catch((error)=>
      {
          setMessage("load once againg")
      });
      
  },[]
)
  const [formData, setFormData] = useState([])
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
    "id": 1,
  "firstName": formData.firstName,
  "lastName": formData.lastName,
  "email": formData.email,
  "mob": formData.mob
  }

  CustomerService.
  editPerson(senddata)
  .then((response)=>
  {
      console.log(response.data)
      setMessage("updated successfuly")
     
      
  })
  .catch((error)=>
  {
      setMessage("somthing wrong do after some time")
  });
}


  return (<>
  <ProtectedNav></ProtectedNav>
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
            id="firstName"
            name="firstName"
            value={formData.firstName}
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
            id="lastName"
            name="lastName"
            value={formData.lastName}
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
        {message}
          </label>
      </form>
      </div>
     
    </div>
    </div>
    </>
  );
}

export default EditPorfile;
