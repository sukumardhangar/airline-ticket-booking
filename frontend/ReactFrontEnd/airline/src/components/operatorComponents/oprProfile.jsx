import { useEffect,useState } from 'react';
import OperatorService  from '../../services/OperatorService';
import { useLocation,useNavigate,Link } from 'react-router-dom';
import ProtectedNavOpr from './protectedNavOpr';

function OprProfile()
{
    const navigate=useNavigate();

    const [formData, setFormData]=useState([]);
    const [message,setMessage]=useState("");
    useEffect(()=>
    {
        
        OperatorService.
        getOperator(3)
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
const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

const toEditProfile=()=>
{
    navigate('/oprEditprofile');

}
  
    return(<>
    <ProtectedNavOpr/>
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
            readOnly
          />
          
        </div>
        
        <button type="submit" className="btn btn-primary" onClick={toEditProfile}>
          Edit
        </button>
      </form>
      </div>
    </div>
    </div>
    
    </>)
}
export default OprProfile;