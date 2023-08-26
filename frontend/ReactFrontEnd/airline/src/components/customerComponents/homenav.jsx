import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButtonExample from './checknav';
import {useNavigate} from 'react-router-dom'

const Homenav = () => {
  const navigate=useNavigate();

  const signIn=()=>
  {
    navigate('/login');

  }
  const SignUpUser=()=>
  {
    navigate('/register');

  }
  return (

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
                <a class="nav-link" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/aboutUs">About Us</a>
              </li>


            </ul>
            <form class="d-flex" role="search">
              {/* <div >

                <button class="btn btn-outline-primary" type="submit" style={{ margin: 15 }}>Search</button>
              </div> */}
               <div>
        <button  class="btn btn-outline-success" type="submit" style={{margin:15}} onClick={signIn}>Sign In</button>
        
        </div>
        <div>
        <button  class="btn btn-outline-success" type="submit" style={{margin:15}} onClick={SignUpUser}>Sign Up</button>
        
        </div>

            </form>

          </div>

        </div>
      </nav></div>



  )
}

export default Homenav;