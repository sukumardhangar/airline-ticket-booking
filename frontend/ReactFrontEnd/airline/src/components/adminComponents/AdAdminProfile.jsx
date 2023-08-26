import { useEffect,useState } from 'react';
import { useLocation,useNavigate,Link } from 'react-router-dom';
import AdminService from '../../services/AdminService';
import AdProfileNav from './AdProfileNav';
function  AdminProfile()
{
    const navigate=useNavigate();
    const userId=sessionStorage.getItem("userId");
    const [formData, setFormData]=useState({});
    const [message,setMessage]=useState("");
    useEffect(()=>
    {
        console.log(userId);
        
        AdminService.
        GetAdminProfile(userId)
        .then((response)=>
        {
            console.log(response.data)
            setFormData(response.data[0]);
           
            
        })
        .catch((error)=>
        {
            setMessage("load once againg")
        });
        
    },[]
)
const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

const toEditProfile=()=>
{
    navigate('/editAdminPorfile');

}
  
    return(<>
    <AdProfileNav></AdProfileNav>
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
          <label htmlFor="mobile" className="form-label">
            Mobile
          </label>
          <input
            type="text"
            className="form-control"
            id="mob"
            name="mob"
            value={formData.mob}
            onChange={handleChange}
            readOnly
          />
          
        </div>
        
        {/* <button type="submit" className="btn btn-primary" onClick={toEditProfile}>
          Edit
        </button> */}
      </form>
      </div>
    </div>
    </div>
    
    </>)
}
export default AdminProfile;