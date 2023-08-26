import React, { useState,useEffect } from 'react';
import { Table, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast} from 'react-toastify';
import AdProfileNav from './AdProfileNav'
import AdminService from '../../services/AdminService';

const AdPendingOperator = () => {
const[message,setMessage]=useState("");
  useEffect(()=>
  {
   
    method();
      
  },[]
)

const method=()=>
{
  try {
    const data="pending"
    AdminService.
    getAllAprrovedOperator(data)
    .then((response)=>
    {

      setUsers(response.data);


                       
    })
    .catch((error)=>
    {
      toast("somthing wrong")             
    });

} catch (error) {
toast.error('Load after somethime');
}
}


  const [users, setUsers] = useState([
 
  ]);

 
  const PendingToapproveOpr=(id)=>
  {
    try {
      const data=
      {
        status:"approved"
      }
      AdminService.
      ToChangeStatus(id,data)
      .then((response)=>
      {
        toast("Appoved the Operator ")   
        method();            
                         
      })
      .catch((error)=>
      {
        toast("somthing wrong")             
      });
  
  } catch (error) {
  toast.error('Load after somethime');
  } 
  }
  const deleteOpr=(id)=>
  {
    try {
      const data="pending"
      AdminService.
      deleteOpr(id)
      .then((response)=>
      {
  
        toast(" Operator deleted ")   
        method();    
  
  
                         
      })
      .catch((error)=>
      {
        toast("somthing wrong")             
      });
  
  } catch (error) {
  toast.error('Load after somethime');
  }
  }

  return (
   <>
   {message}
   <AdProfileNav></AdProfileNav>
    <Container className="d-flex justify-content-center align-items-center mt-5">
      <div style={{ paddingTop: '0px', width: '100%' }}>
        <Table
          striped
          bordered
          hover
          style={{
            backgroundColor: '#f5f5f5',
            border: '2px solid #000',
            borderRadius: '8px',
            boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)' // Add box-shadow
          }}
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Mobile</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.fname}</td>
                <td>{user.lname}</td>
                <td>{user.mob}</td>
                <td>{user.role}</td>
                <td>{user.status}</td>
                <td>
                  <Button
                    variant="success"
                    onClick={()=>PendingToapproveOpr(user.id)}
                  >
                    Approve
                  </Button>
                  <Button
                    variant="warning"
                    onClick={()=>deleteOpr(user.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container></>
  );
};

export default AdPendingOperator;
