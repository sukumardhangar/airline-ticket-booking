import CustomerAxios from '../Customer-http-common';

// person controller3


const editPerson = (data) => {
    return CustomerAxios.put('person/EditPerson', data);
  };

  const login = (data) => {
    return CustomerAxios.post('person/login', data);
  };

  const addPerson = (data) => {
    return CustomerAxios.post('person/addPerson', data);
  };

  const getPersonAll= () => {
    return CustomerAxios.get('person/getPersonAll');
  };

  const getPerson = (id) => {
    return CustomerAxios.get(`person/getPerson/${id}`);
  };


//ticket-controller

const addBooking = (data) => {
    return CustomerAxios.post('ticket/addBooking', data);
  };

  const getTicketHistory = (id) => {
    return CustomerAxios.get(`ticket/getTicketHistory/${id}`);
  };

  const getConfirmTicket = (id) => {
    return CustomerAxios.get(`ticket/getConformTicket/${id}`);
  };

  const CancelTicket = (id) => {
    return CustomerAxios.get(`ticket/cancelTicket/${id}`);
  };


//schedule Controller
const GetSchedule = (data) => {
    return CustomerAxios.post('Booking/getSchedule', data);
  };

  const getSeat = (id) => {
    return CustomerAxios.get(`Booking/getSeat/${id}`);
  };



export default {editPerson,login,addPerson,getPersonAll,getPerson ,addBooking,getTicketHistory ,getConfirmTicket,CancelTicket,GetSchedule,getSeat };
