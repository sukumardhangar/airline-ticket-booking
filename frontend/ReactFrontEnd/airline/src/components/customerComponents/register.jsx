import React, { useState } from 'react';
import OperatorService from '../../services/OperatorService';
import CustomerService from '../../services/CustomerService';
import { useLocation,useNavigate,Link } from 'react-router-dom';
import { toast} from 'react-toastify';
import axios from 'axios';
import Homenav from './homenav';


function RegistePage() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mob, setMob] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('CUSTOMER');
  const [error, setError] = useState('');
  const navigate=useNavigate();


  const loginPerson = async (e) =>
   {
     const data={
      "email":email,
      "password":password,
      "firstName":firstName,
      "lastName":lastName,
      "mob":mob,
      "role":role

     }
     
    if(role==="CUSTOMER")
    {
        const data={
            "email":email,
            "password":password,
            "firstName":firstName,
            "lastName":lastName,
            "mob":mob,
            "role":role
      
           }
      try {
              CustomerService.
              addPerson(data)
              .then((response)=>
              {
                toast("registration complited")             

                navigate("/")
                                 
              })
              .catch((error)=>
              {
                toast("somthing wrong")             
              });
  
      } 
      catch (error) {
        toast.error('Load after somethime');
      }

          
    
    }
    
    else if(role==="OPERATOR")
          {
      
            const data={
                "email":email,
                "password":password,
                "firstName":firstName,
                "lastName":lastName,
                "mob":mob,
                "role":role,
                "status":"pending"
               }
            try {
                OperatorService.
                addOperator(data)
                .then((response)=>
                {
                  toast("registration complited")             
  
                  navigate("/")
                                   
                })
                .catch((error)=>
                {
                  toast("somthing wrong")             
                });
  
      } catch (error) {
        toast.error('Load after somethime');
      }

        }
        else
        {
          console.log("error big")
          toast.error('Invalid username or password', { position: 'top-center' });

        }
          
      
   

    }
    
   
  
  

  return (
    <>
    <Homenav></Homenav>
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg">
            <div className="card-body">
              <div className="mb-3">
                <label htmlFor="role" className="form-label">
                  Select User Role
                </label>
                <select
                  id="role"
                  className="form-select"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  style={{ width: '100%' }}
                >
                  <option value="CUSTOMER">Customer</option>
                  <option value="OPERATOR">OPERATOR</option>
                  <option value="admin">ADMIN</option>
                </select>
              </div>
              <h2 className="text-center mb-4">Sign Up</h2>
              {error && <div className="alert alert-danger">{error}</div>}
                <div className="mb-3">
                  <label htmlFor="setFirstName" className="form-label">
                  First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="setLastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="password"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="mob" className="form-label">
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="mob"
                    value={mob}
                    onChange={(e) => setMob(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label" >
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100" onClick={loginPerson}>
                Sign Up
                </button>
            </div>
          </div>
        </div>
      </div>
    </div></>
  );
}

export default RegistePage;
