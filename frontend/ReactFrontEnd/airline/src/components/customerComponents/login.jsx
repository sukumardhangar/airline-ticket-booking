import React, { useState } from 'react';
import OperatorService from '../../services/OperatorService';
import CustomerService from '../../services/CustomerService';
import { useLocation,useNavigate,Link } from 'react-router-dom';
import { toast} from 'react-toastify';
import axios from 'axios';
import Homenav from './homenav';
import AdminService from '../../services/AdminService';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('CUSTOMER');
  const [error, setError] = useState('');
  const navigate=useNavigate();


  const loginPerson = async (e) =>
   {
     const data={
      "email":email,
      "password":password
     }
     
    if(role==="CUSTOMER")
    {
      try {
              const response = await axios.post('http://localhost:8080/auth/signin', {
                 email,
                 password
              }).then((response)=>
              {

              console.log(response.data)
               if(response.data.role==="CUSTOMER")
                   {
                   sessionStorage.setItem('jwt', response.data.jwt);
                    sessionStorage.setItem('userId', response.data.userId);
                    sessionStorage.setItem('role', response.data.role);

                      toast.success('Login successful!', { position: 'top-center' });

                       navigate("/searchFLight")
                   }
                 else
                   {
                   // alert("Invalid customer userName and PAssword")
                     toast.error('Invalid customer userName and PAssword');

                    
                    }
                  }).catch((error)=>
                  {
                    toast("Invalid customer userName and PAssword")             
                  });
  
      } 
      catch (error) {
        toast.error('Load after somethime');
      }

          
    
    }
    
        else if(role==="OPERATOR")
          {
      
            try {
              const response = await axios.post('http://localhost:7066/auth/signin', {
                 email,
                 password
              }).then((response)=>{ console.log(response.data)
                if(response.data.role==="OPERATOR")
                    {
                    sessionStorage.setItem('jwt', response.data.jwt);
                    sessionStorage.setItem('userId', response.data.userId);
                    sessionStorage.setItem('role', response.data.role);
 
                       toast.success('Login successful!', { position: 'top-center' });
 
                        navigate("/OpAddSchedule")
                    }
                  else
                    {
                     console.log("Not ")
                      toast.error('Invalid customer userName and PAssword', { position: 'top-center' });
 
                     }}).catch((error)=>
                     {
                       toast("Invalid Operator userName and PAssword")             
                     });

             
  
              } catch (error) {
                 toast.error('Load after somethime');
             }

     

        }
        else if(role==="ADMIN")
        {
          
          try {
            AdminService
            .adminLogin(data)
            .then((response)=>{ 
              console.log(response.data[0].role)
              if(response.data[0].role=="admin")
                  {
                    console.log("in login",response.data[0].id)

                  sessionStorage.setItem('userId', response.data[0].id);
                  sessionStorage.setItem('userName', response.data[0].fname);

                     toast.success('Login successful!', { position: 'top-center' });

                      navigate("/adminHome")
                  }
                else
                  {
                   console.log("Not ")
                    toast.error('Invalid admin userName and Password', { position: 'top-center' });

                   }}).catch((error)=>
                   {
                     toast("Invalid Admin userName and Password")             
                   });

           

            } catch (error) {
               toast.error('Load after somethime');
           }
          

        }
        else
        {
          console.log("error big")
          toast.error('Invalid  username or password of User', { position: 'top-center' });
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
                  <option value="ADMIN">ADMIN</option>
                </select>
              </div>
              <h2 className="text-center mb-4">Login</h2>
              {error && <div className="alert alert-danger">{error}</div>}
                <div className="mb-3">
                  <label htmlFor="setEmail" className="form-label">
                  email
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100" onClick={loginPerson}>
                  Login
                </button>
            </div>
          </div>
        </div>
      </div>
    </div></>
  );
}

export default LoginPage;
