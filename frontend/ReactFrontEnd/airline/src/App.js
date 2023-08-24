
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
//import Slider from 'react-slick';
//  import 'slick-carousel/slick/slick.css';
//  import 'slick-carousel/slick/slick-theme.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchFLight from './components/customerComponents/searchFlight'
import FlightSchedule from './components/customerComponents/flightSchedule';
import SeatType from './components/customerComponents/seatType';
import SeatingArrangment from './components/customerComponents/seatingArrangment'
import AllPassnger from './components/customerComponents/allPassanger';
import MakePayment from './components/customerComponents/makePayment';
import ConfirmBooking from './components/customerComponents/confirmBooking';
import TestHome from './components/customerComponents/testHome';
import AboutUs from './components/customerComponents/aboutUs';
import BookingHistory from './components/customerComponents/bookingHistory';

function App() {
  return (
    <BrowserRouter>
      <div>
        <div>
          <Routes> bookingHistory
             <Route exact path='/' element={ <TestHome/> } />
             <Route exact path='/bookingHistory' element={ <BookingHistory/> } />

             <Route exact path='/aboutUs' element={ <AboutUs/> } />
            <Route exact path='/searchFLight' element={<SearchFLight />} />
            <Route exact path='/flightDetail' element={<FlightSchedule/>} />
            <Route exact path='/SeatType' element={<SeatType/>} />
            <Route exact path='/seatingArrangment' element={ <SeatingArrangment/> } />
            <Route exact path='/addPassangers' element={ <AllPassnger/> } />
            <Route exact path='/makePayment' element={ <MakePayment/> } />
            <Route exact path='/confirmBooking' element={ <ConfirmBooking/> } />






          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
