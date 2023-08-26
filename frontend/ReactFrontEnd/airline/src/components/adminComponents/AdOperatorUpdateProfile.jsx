import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function AdOperatorUpdateProfile() {
  const [formData, setFormData] = useState({
    email: "",
    fname: "",
    lname: "",
    mob: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center">
      <div className="w-50 p-4 shadow rounded" style={{ paddingTop: '600px', backgroundColor: 'pink' }}>
        <h1 className="text-center mb-4">Edit Profile</h1>
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
              
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdOperatorUpdateProfile;
