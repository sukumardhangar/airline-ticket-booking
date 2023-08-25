
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
//import Slider from 'react-slick';
//  import 'slick-carousel/slick/slick.css';
//  import 'slick-carousel/slick/slick-theme.css';
import { BrowserRouter, useRoutes,Router,Route,Routes } from 'react-router-dom';
import SearchFLight from './components/customerComponents/searchFlight'
import FlightSchedule from './components/customerComponents/flightSchedule';
import SeatType from './components/customerComponents/seatType';
import SeatingArrangment from './components/customerComponents/seatingArrangment'
import AllPassnger from './components/customerComponents/allPassanger';
import MakePayment from './components/customerComponents/makePayment';
import ConfirmBooking from './components/customerComponents/confirmBooking';
import TestHome from './components/customerComponents/testHome';
import BookingHistory from './components/customerComponents/bookingHistory';
import EditPorfile from './components/customerComponents/EditProfile';
import Profile from './components/customerComponents/profile';
import AddFlightSchedule from './components/operatorComponents/addSchedule';
import SearchFlightByAirlineNumber from './components/operatorComponents/searchFlightByAirlineNumber';
import About from './components/operatorComponents/about';
import AllScheduleByAirline from './components/operatorComponents/allScheduleForAirline'
import OprProfile from './components/operatorComponents/oprProfile';
import OprEditPorfile from './components/operatorComponents/oprEditPofile';
import GetAllFlightDetailFOrOperator from './components/operatorComponents/getAllFlightForOperator'
import ScheduleAdded from './components/operatorComponents/scheduleAdded';
import LoginPage from './components/customerComponents/login';
import ProtectedRoute from './components/protectedRoute';
import OprHome from './components/operatorComponents/homeOpr';

function App() {
  return (
    <BrowserRouter>
    <div>
      <div>
        <Routes> bookingHistory
             <Route exact path='/' element={ <TestHome/> } />
             <Route exact path='/login' element={ <LoginPage/> } />
             <Route exact path='/bookingHistory' element={ <BookingHistory/> } />
             <Route exact path='/profile' element={ <Profile/> } />
             <Route exact path='/editprofile' element={ <EditPorfile/> } />
             <Route exact path='/aboutUs' element={ <About/> } />
             <Route exact path='/searchFLight' element={<SearchFLight />} />
             <Route exact path='/flightDetail' element={<FlightSchedule/>} />
             <Route exact path='/SeatType' element={<SeatType/>} />
             <Route exact path='/seatingArrangment' element={ <SeatingArrangment/> } />
             <Route exact path='/addPassangers' element={ <AllPassnger/> } />
             <Route exact path='/makePayment' element={ <MakePayment/> } />
             <Route exact path='/confirmBooking' element={ <ConfirmBooking/> } />


             <Route exact path='/OprHome' element={ <OprHome/> } />
             <Route exact path='/OpAddSchedule' element={ <AddFlightSchedule/> } />
             <Route exact path='/oprSearchFlight' element={ <SearchFlightByAirlineNumber/> } />
             <Route exact path='/allScheduleForAirLine' element={ <AllScheduleByAirline/> } />
             <Route exact path='/oprProfile' element={ <OprProfile/> } />
             <Route exact path='/oprEditprofile' element={ <OprEditPorfile/> } />
             <Route exact path='/allFlightOfOPerator' element={ <GetAllFlightDetailFOrOperator/> } />
             <Route exact path='/scheduleAdded' element={ <ScheduleAdded/> } />
       </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}



export default App;

