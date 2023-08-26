import allaxios from '../Customer-http-common';

// person controller3

const CustomerAxios=allaxios.CustomerAxios;
const editPerson = (data) => {
    return CustomerAxios.put('person/EditPerson', data);
  };

 

  const addPerson = (data) => {
    return CustomerAxios.post('person/addperson', data);
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
    return CustomerAxios.get(`ticket/getTicketHistory/{id}?id=${id}`);
  };

  const getConfirmTicket = (id) => {
    return CustomerAxios.get(`ticket/getConformTicket/{id}?id=${id}`);
  };

  const CancelTicket = (id) => {
    return CustomerAxios.get(`ticket/cancelTicket/{id}?id=${id}`);
  };


//schedule Controller
const GetSchedule = (data) => {
    return CustomerAxios.post('Booking/getSchedule', data);
  };

  const getSeat = (id) => {
    return CustomerAxios.get(`Booking/getSeat/${id}`);
  };


  const loginUser = (data) => {
    return CustomerAxios.post('auth/signin', data);
  };


export default {editPerson,loginUser,addPerson,getPersonAll,getPerson ,addBooking,getTicketHistory ,getConfirmTicket,CancelTicket,GetSchedule,getSeat };
