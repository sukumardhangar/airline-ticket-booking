import { useLocation,useNavigate,Link } from 'react-router-dom';


const OperatorNav = () =>
{
  const navigate=useNavigate();

  const signOut=()=>
  {
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("jwt");
    sessionStorage.removeItem("role");

    navigate('/');

  }

  const Profile=()=>
  {
   
    navigate('/oprProfile');

    
  }
    return (
        <>
       <div>
       <nav class="navbar navbar-expand-lg bg-body-tertiary" style={{ backgroundColor: "black" }} >
        <div class="container-fluid" style={{ backgroundColor: "lightblue" }}>
          <a class="navbar-brand" href="#">X Airline</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
          <a class="nav-link" href="/OprHome">Home</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link" href="/OpAddSchedule">Add flight</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/oprSearchFlight">Search Flights</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/allFlightOfOPerator">see All FLight</a>
        </li>
        
      </ul>
      <form class="d-flex" role="search">
       
        <div >

        <button class="btn btn-outline-dark" type="submit" style={{margin:15}} onClick={Profile}>Profile</button>
        </div> 
        
        <div>
        <button class="btn btn-outline-danger" type="submit" style={{margin:15}} onClick={signOut}>Sign Out</button>
        
        </div>
        
      </form>
      
    </div>

  </div>
</nav>
       </div>
        
        </>
    )
}

export default OperatorNav;