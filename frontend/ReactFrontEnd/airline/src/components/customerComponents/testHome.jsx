import HomeSorce from "./HomeSource"
import Colossal from "./colossal"
import Footer from "./footer"
import ProtectedNav from "./protectedNav";

const TestHome = () =>
{
    return(
        <div style={{backgroundColor:"black"}}>
            <ProtectedNav/>
            <center><h1 style={{color : "white"}}>Welcome to Airline X</h1></center>
            <HomeSorce/>
            <Colossal/>
            <Footer/>
        </div>
       
    )
    
    

}
export default TestHome;