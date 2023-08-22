import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchFLight from './components/customerComponents/searchFlight'
import FlightSchedule from './components/customerComponents/flightSchedule';
import SeatType from './components/customerComponents/seatType';
import seatingArrangment from './components/customerComponents/seatingArrangment';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <div>
          <Routes>
            <Route exact path='/' element={<SearchFLight />} />
            <Route exact path='/flightDetail' element={<FlightSchedule/>} />
            <Route exact path='/SeatType' element={<SeatType/>} />
            <Route exact path='/seatingArrangment' element={<seatingArrangment/>} />


          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
