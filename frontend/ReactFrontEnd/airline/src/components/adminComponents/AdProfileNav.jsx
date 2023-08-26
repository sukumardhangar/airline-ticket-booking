import { useLocation,useNavigate,Link } from 'react-router-dom';


const AdProfileNav = () =>
{
  const navigate=useNavigate();

  const toSignOut=()=>
  {
   
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("userName");

    navigate('/');

  }
  

  const toProfile=()=>
  {
    navigate("/adminProfile")
  }
    return (
        <>
       <div>
       <nav class="navbar navbar-expand-lg bg-body-tertiary" >
        <div class="container-fluid" style={{ backgroundColor: "lightblue" }}>
          <a class="navbar-brand" href="#">X Airline</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
          <a class="nav-link" href="/adminHome">Home</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link" href="AdPendingOperator">Pending Operator</a>  
        </li>
        <li class="nav-item">
          <a class="nav-link" href="AdApprovedOperator">Approved Profile</a>
        </li>
       
        
      </ul>
      <form class="d-flex" role="search">
       
        <div >

        <button class="btn btn-outline-info" type="submit" style={{margin:15}} onClick={toProfile}>Profile</button>
        </div> 
        
        <div>
        <button class="btn btn-outline-danger" type="submit" style={{margin:15}} onClick={toSignOut}>SignOut</button>
        
        </div>
        
      </form>
      
    </div>

  </div>
</nav>
       </div>
        
        </>
    )
}

export default AdProfileNav;