import React, { useState,useEffect } from 'react';
import { Table, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminService from '../../services/AdminService';
import AdProfileNav from './AdProfileNav'
import { toast} from 'react-toastify';
function AdApprovedOperator () {
  useEffect(()=>
  {
    method();
  
      
  },[]
)

const method=()=>
{
  try {
    const data="approved"
    AdminService.
    getAllAprrovedOperator(data)
    .then((response)=>
    {
      toast("all Approved Operator ")             

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

const deleteOpr=(id)=>
{
  try {
    const data=
    {
      status:"rejectd"
    }
    AdminService.
    ToChangeStatus(id,data)
    .then((response)=>
    {

      toast(" Operator Rejected ")   
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
 
  const [users, setUsers] = useState([

  ]);

  const handleStatusChange = (userId, newStatus) => {
    const updatedUsers = users.map(user =>
      user.id === userId ? { ...user, status: newStatus } : user
    );
    setUsers(updatedUsers);
  };

  return (
    <>
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
                    variant="warning"
                    onClick={() => deleteOpr(user.id)}
                  >
                    Reject
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  </>);
};

export default AdApprovedOperator;
