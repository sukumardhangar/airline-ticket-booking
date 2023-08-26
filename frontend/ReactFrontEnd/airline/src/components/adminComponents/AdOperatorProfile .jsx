import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function AdOperatorProfile() {
  const [formData, setFormData] = useState({
    fname: "Tejas",
    email: "Tejas@11",
    lname: "Avhad",
    mob: "7038070625"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {

    // tejas avhad itha code write kar page redirect  cha 
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center">
      <div className="w-50 p-4 shadow rounded" style={{ paddingTop: '600px', backgroundColor: 'pink' }}>
        <h1 className="text-center mb-4">My Profile</h1>
        <form onSubmit={handleSubmit}>
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
              id="lname"
              name="lname"
              value={formData.lname}
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
              Mobile
            </label>
            <input
              type="number"
              className="form-control"
              id="mob"
              name="mob"
              value={formData.mob}
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
  );
}

export default AdOperatorProfile;
