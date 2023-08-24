import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
//import backgroundImage from './images/lufthansa.png'; // Adjust the path to your image

function MyProfile() {
  const [formData, setFormData] = useState({
    firstName: 'Tejas',
    lastName: 'Avhad',
    email: 'tejas@11',
    password: 'jarvis@11',
    confirmPassword: 'jarvis@11',
    mobile: '7038070625',
    role: 'User', // Default role
    status: 'Approved',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div
    className="container mt-5 d-flex justify-content-center align-items-center"
    style={{
    //  backgroundImage: `url(${backgroundImage})`, // Apply the background image
      backgroundSize: 'cover', // Adjust the background size
      backgroundPosition: 'center', // Adjust the background position
    }}
  >
    <div className="container mt-5 d-flex justify-content-center align-items-center">
      <div className="w-50 p-4 shadow rounded" style={{ paddingTop: '600px' , backgroundColor:'pink' }}>
        <h1 className="text-center mb-4">My Profile</h1>
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
            readOnly
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
            readOnly
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
            readOnly
          />
          
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            readOnly
          />
         
        </div>

        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            readOnly
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
            value={formData.mobile}
            onChange={handleChange}
            readOnly
          />
          
        </div>

        <div className="mb-3">
          <label htmlFor="role" className="form-label">
            Role
          </label>
          <input
            className="form-select"
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            readOnly
          />
            
          
        
        </div>

        <div className="mb-3">
          <label htmlFor="status" className="form-label">
            Status
          </label>
          <input
            type="text"
            className="form-control"
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            readOnly
          />
          
        </div>
        
        <button type="submit" className="btn btn-primary">
          Edit Profile 
        </button>
      </form>
      </div>
    </div>
    </div>
  );
}

export default MyProfile;
