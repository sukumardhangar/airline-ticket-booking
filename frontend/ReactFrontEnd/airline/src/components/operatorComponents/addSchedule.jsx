import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import ProtectedNavOpr from './protectedNavOpr';
import OperatorService  from '../../services/OperatorService';
import {useNavigate} from 'react-router-dom'
const AddFlightSchedule = () => {
  const [message,setMessage]=useState("");
  const navigate=useNavigate();
  const userId=sessionStorage.getItem("userId");

  const [formData, setFormData] = useState({
    airlineName: '',
    category: 'DOMESTIC',
    persId: userId,
    airlineNumber: 0,
    listOfScedules: [
      {
        scheId: 0,
        deparutreTime: '',
        arrivalTime: '',
        source: '',
        destination: '',
        flightId: 0,
        listOfSeats: [
          {
            seeatsId: 0,
            seatType: 'BUSSINESS',
            price: 0,
            seatCount: 0,
            schedId: 0,
            totalBooked: 0,
          },
        ],
      },
    ],
  });

      
     
  const addschedules=()=>
  {
    console.log(formData)
    OperatorService.
    addFlightDetails(formData)
    .then((response)=>
    {
      navigate('/scheduleAdded');

      //setMessage("Flight details added");
      //  alert("schedule added")
        
    })
    .catch((error)=>
    {
        setMessage("somthing wrong")
        
    });
  }    
  


  
  const handleInputChange = (e, scheduleIndex) => {
    const { name, value } = e.target;
    const newFormData = { ...formData };
    newFormData.listOfScedules[scheduleIndex][name] = value;
    setFormData(newFormData);
  };

  const handleAddSchedule = () => {
    const newSchedule = {
      scheId: 0,
      deparutreTime: '',
      arrivalTime: '',
      source: '',
      destination: '',
      flightId: 0,
      listOfSeats: [
        {
          seatsId: 0,
          seatType: 'BUSSINESS',
          price: 0,
          seatCount: 0,
          schedId: 0,
          totalBooked: 0,
        },
      ],
    };
    setFormData({
      ...formData,
      listOfScedules: [...formData.listOfScedules, newSchedule],
    });
  };

  const handleAddSeat = (scheduleIndex) => {
    const newSeat = {
      seatsId: 0,
      seatType: 'BUSSINESS',
      price: 0,
      seatCount: 0,
      schedId: 0,
      totalBooked: 0,
    };

    const newSchedules = [...formData.listOfScedules];
    newSchedules[scheduleIndex].listOfSeats.push(newSeat);

    setFormData({
      ...formData,
      listOfScedules: newSchedules,
    });
  };

//======================================================
const handleSeatInputChange = (e, scheduleIndex, seatIndex) => {
    const { name, value } = e.target;
    const newFormData = { ...formData };
    newFormData.listOfScedules[scheduleIndex].listOfSeats[seatIndex][name] = value;
    setFormData(newFormData);
  };
//======================================================


  // const handleGenerateJSON = () => {
  //   console.log(JSON.stringify(formData, null, 2));
  // };

  return (<>
       <ProtectedNavOpr/>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>

       <div>
       <div className="container d-flex justify-content-center align-items-center vh-100" >
      <div className="flight-form-container p-4 " style={{backgroundColor:'orange'}}>
   
      <h2 className='mb-4 ' >Flight Information Form</h2>
      <label>
        Airline Name
        <br/>
        <input
          type="text"
          name="airlineName"
          value={formData.airlineName}
          onChange={(e) => setFormData({ ...formData, airlineName: e.target.value })}
        />
      </label>
      <br/>
           <label>
   Category
   <br/>
   <select
     name="category"
     value={formData.category}
     onChange={(e) => setFormData({ ...formData, category: e.target.value })}
  >
     <option value="DOMESTIC">Domestic</option>
    <option value="INTERNATIONAL">International</option>
   </select>
 </label>
      <br/>
      <label>
        Ariline Number
        <br/>
        <input
          type="number"
          name="airlineNumber"
          value={formData.airlineNumber}
          onChange={(e) => setFormData({ ...formData, airlineNumber: e.target.value })}
        />
      </label>

      <hr />
      {formData.listOfScedules.map((schedule, scheduleIndex) => (
        <div key={scheduleIndex} className='mb-4'>
          <h3>Schedule {scheduleIndex + 1}</h3>
        
          <br/>
          <label>
            Source
            <br/>
            <input
              type="text"
              name="source"
              value={schedule.source}
              onChange={(e) => handleInputChange(e, scheduleIndex)}
            />
          </label>
          <br/>
          <label>
            Destination
            <br/>
            <input
              type="text"
              name="destination"
              value={schedule.destination}
              onChange={(e) => handleInputChange(e, scheduleIndex)}
            />
          </label>
          <br/>
          <label>
            Departure Time
            <br/>
            <input
              type="datetime-local"
              name="deparutreTime"
              value={schedule.deparutreTime}
              onChange={(e) => handleInputChange(e, scheduleIndex)}
            />
          </label>
          <br/>
          <label>
            Arrival Time
            <br/>
            <input
              type="datetime-local"
              name="arrivalTime"
              value={schedule.arrivalTime}
              onChange={(e) => handleInputChange(e, scheduleIndex)}
            />
          </label>
         

          <br/>
          <button className="btn btn-secondary" onClick={() => handleAddSeat(scheduleIndex)}>
              Add Seat
            </button>
          {schedule.listOfSeats.map((seat, seatIndex) => (
            <div key={seatIndex}>
              <h4>Seat {seatIndex + 1}</h4>
             {/* ===================================================== */}
               <label>
Seat Type
<br />
<select
name="seatType"
value={seat.seatType}
onChange={(e) => handleSeatInputChange(e, scheduleIndex, seatIndex)}
>
<option value="BUSINESS">Business</option>
<option value="ECONOMY">Economy</option>
</select>

</label>
              <br />
              <label>
                Price
                <br />
                <input
                  type="number"
                  name="price"
                  value={seat.price}
                  onChange={(e) => handleSeatInputChange(e, scheduleIndex, seatIndex)}
                />
              </label>
              <br />
              <label>
                Seat Count
                <br />
                <input
                  type="number"
                  name="seatCount"
                  value={seat.seatCount}
                  onChange={(e) => handleSeatInputChange(e, scheduleIndex, seatIndex)}
                />
              </label>
              <br />
              {/* ===================================================== */}
            </div>
          ))}
        </div>
      ))}
     <button className="btn btn-primary" onClick={() => handleAddSchedule()}>
          Add Another Schedule
        </button>
      <br/>
      <button className="btn btn-success mt-3" onClick={addschedules}>
          Add flight details
        </button>
    </div>
    </div>
       </div>
  </>

   
  );
};

export default AddFlightSchedule;

// import React, { useState,useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; 
// import ProtectedNavOpr from './protectedNavOpr';
// import OperatorService  from '../../services/OperatorService';
// import {useNavigate} from 'react-router-dom'
// import { toast} from 'react-toastify';
// const AddFlightSchedule = () => {
//   const [message,setMessage]=useState("");
//   const navigate=useNavigate();
//   const userId=sessionStorage.getItem("userId");

//   const [formData, setFormData] = useState({
//     airlineName: '',
//     category: '',
//     persId: userId,
//     airlineNumber: 0,
//     listOfScedules: [
//       {
//         scheId: 0,
//         deparutreTime: '',
//         arrivalTime: '',
//         source: '',
//         destination: '',
//         flightId: 0,
//         listOfSeats: [
//           {
//             seeatsId: 0,
//             seatType: 'BUSSINESS',
//             price: 0,
//             seatCount: 0,
//             schedId: 0,
//             totalBooked: 0,
//           },
//         ],
//       },
//     ],
//   });

      
     
//   const addschedules=()=>
//   {
//     console.log(formData)
//     OperatorService.
//     addFlightDetails(formData)
//     .then((response)=>
//     {
//       toast.success("Flight details added")
//       navigate('/scheduleAdded');

//       //setMessage("Flight details added");
//       //  alert("schedule added")
        
//     })
//     .catch((error)=>
//     {
//       toast.error("Something is wrong")             
         
//     });
//   }    
  


  
//   const handleInputChange = (e, scheduleIndex) => {
//     const { name, value } = e.target;
//     const newFormData = { ...formData };
//     newFormData.listOfScedules[scheduleIndex][name] = value;
//     setFormData(newFormData);
//   };

//   const handleAddSchedule = () => {
//     const newSchedule = {
//       scheId: 0,
//       deparutreTime: '',
//       arrivalTime: '',
//       source: '',
//       destination: '',
//       flightId: 0,
//       listOfSeats: [
//         {
//           seatsId: 0,
//           seatType: 'BUSSINESS',
//           price: 0,
//           seatCount: 0,
//           schedId: 0,
//           totalBooked: 0,
//         },
//       ],
//     };
//     setFormData({
//       ...formData,
//       listOfScedules: [...formData.listOfScedules, newSchedule],
//     });
//   };

//   const handleAddSeat = (scheduleIndex) => {
//     const newSeat = {
//       seatsId: 0,
//       seatType: 'BUSSINESS',
//       price: 0,
//       seatCount: 0,
//       schedId: 0,
//       totalBooked: 0,
//     };

//     const newSchedules = [...formData.listOfScedules];
//     newSchedules[scheduleIndex].listOfSeats.push(newSeat);

//     setFormData({
//       ...formData,
//       listOfScedules: newSchedules,
//     });
//   };

// //======================================================
// const handleSeatInputChange = (e, scheduleIndex, seatIndex) => {
//     const { name, value } = e.target;
//     const newFormData = { ...formData };
//     newFormData.listOfScedules[scheduleIndex].listOfSeats[seatIndex][name] = value;
//     setFormData(newFormData);
//   };
// //======================================================


//   // const handleGenerateJSON = () => {
//   //   console.log(JSON.stringify(formData, null, 2));
//   // };

//   return (<>
//        <ProtectedNavOpr/>
//        <br></br>
//        <br></br>
//        <br></br>
//        <br></br>
//        <br></br>
//        <br></br>
//        <br></br>

//        <div>
//        <div className="container d-flex justify-content-center align-items-center vh-100" >
//       <div className="flight-form-container p-4 " style={{backgroundColor:'orange'}}>
   
//       <h2 className='mb-4 ' >Flight Information Form</h2>
//       <label>
//         Airline Name
//         <br/>
//         <input
//           type="text"
//           name="airlineName"
//           value={formData.airlineName}
//           onChange={(e) => setFormData({ ...formData, airlineName: e.target.value })}
//         />
//       </label>
//       <br/>
//       {/* //========================= */}
//       <label>
//   Category
//   <br/>
//   <select
//     name="category"
//     value={formData.category}
//     onChange={(e) => setFormData({ ...formData, category: e.target.value })}
//   >
//     <option value="DOMESTIC">Domestic</option>
//     <option value="INTERNATIONAL">International</option>
//   </select>
// </label>
//       {/* //========================= */}
//       <br/>
//       <label>
//         Ariline Number
//         <br/>
//         <input
//           type="number"
//           name="airlineNumber"
//           value={formData.airlineNumber}
//           onChange={(e) => setFormData({ ...formData, airlineNumber: e.target.value })}
//         />
//       </label>

//       <hr />
//       {formData.listOfScedules.map((schedule, scheduleIndex) => (
//         <div key={scheduleIndex} className='mb-4'>
//           <h3>Schedule {scheduleIndex + 1}</h3>
        
//           <br/>
//           <label>
//             Source
//             <br/>
//             <input
//               type="text"
//               name="source"
//               value={schedule.source}
//               onChange={(e) => handleInputChange(e, scheduleIndex)}
//             />
//           </label>
//           <br/>
//           <label>
//             Destination
//             <br/>
//             <input
//               type="text"
//               name="destination"
//               value={schedule.destination}
//               onChange={(e) => handleInputChange(e, scheduleIndex)}
//             />
//           </label>
//           <br/>
//           <label>
//             Departure Time
//             <br/>
//             <input
//               type="datetime-local"
//               name="deparutreTime"
//               value={schedule.deparutreTime}
//               onChange={(e) => handleInputChange(e, scheduleIndex)}
//             />
//           </label>
//           <br/>
//           <label>
//             Arrival Time
//             <br/>
//             <input
//               type="datetime-local"
//               name="arrivalTime"
//               value={schedule.arrivalTime}
//               onChange={(e) => handleInputChange(e, scheduleIndex)}
//             />
//           </label>
         

//           <br/>
//           <button className="btn btn-secondary" onClick={() => handleAddSeat(scheduleIndex)}>
//               Add Seat
//             </button>
//           {schedule.listOfSeats.map((seat, seatIndex) => (
//             <div key={seatIndex}>
//               <h4>Seat {seatIndex + 1}</h4>
//              {/* ===================================================== */}
//              <label>
//                 Seat Type
//                 <br />
//                 <select
//                 name="seatType"
//                 value={seat.seatType}
//                 onChange={(e) => handleSeatInputChange(e, scheduleIndex, seatIndex)}
//                 >
//   <option value="BUSINESS">Business</option>
//   <option value="ECONOMY">Economy</option>
// </select>

//               </label>
//             {/* ===================================================== */}

//               <br />
//               <label>
//                 Price
//                 <br />
//                 <input
//                   type="number"
//                   name="price"
//                   value={seat.price}
//                   onChange={(e) => handleSeatInputChange(e, scheduleIndex, seatIndex)}
//                 />
//               </label>
//               <br />
//               <label>
//                 Seat Count
//                 <br />
//                 <input
//                   type="number"
//                   name="seatCount"
//                   value={seat.seatCount}
//                   onChange={(e) => handleSeatInputChange(e, scheduleIndex, seatIndex)}
//                 />
//               </label>
//               <br />
//             </div>
//           ))}
//         </div>
//       ))}
//      <button className="btn btn-primary" onClick={() => handleAddSchedule()}>
//           Add Another Schedule
//         </button>
//       <br/>
//       <button className="btn btn-success mt-3" onClick={addschedules}>
//           Add flight details
//         </button>
//     </div>
//     </div>
//        </div>
//   </>

   
//   );
// };

// export default AddFlightSchedule;
