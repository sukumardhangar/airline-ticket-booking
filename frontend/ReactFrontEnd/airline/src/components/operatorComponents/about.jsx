import First from "./first";
import Zero from "./zero";
import pic from '../../images/nam2.jpg'
//import ProtectedNavOpr from "./protectedNavOpr";
import Homenav from "../customerComponents/homenav";
const About = () => {
  return (
    <div>
      <Homenav/>
      <div className="container">
     <div className="row">
  <div className="col"><center><Zero/></center></div>
  
  
</div>
<div className="row">
  <div className="col-md-8" style={{backgroundColor: "blue"}}><First/></div>
  {/* <div className="col-md-4"></div> */}
  <div className="col-md-4"><img src={pic}/></div>
 
</div>

    </div>
    </div>
  );
};

export default About;
