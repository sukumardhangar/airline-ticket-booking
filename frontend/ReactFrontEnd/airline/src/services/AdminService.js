import allaxios from '../Customer-http-common';

//admin.js
const AdminAxios=allaxios.AdminAxios;

const GetAllOperator = () => {
  return AdminAxios.get('admin');
};


const ToChangeStatus = (id,data) => {
  return AdminAxios.put(`admin/${id}`, data);
};


const EditAdminProfile = (data) => {
  return AdminAxios.put('admin', data);
};

const GetAdminProfile = (admin) => {
  return AdminAxios.get(`admin/${admin}`);
};


//flight.js

const GetAllFlightDetail = () => {
  return AdminAxios.get('flight');
};

const GetFlightDetailForOperator = (id) => {
  return AdminAxios.get(`flight/${id}`);
};



export default { GetAllOperator, ToChangeStatus, EditAdminProfile, GetAdminProfile, GetAllFlightDetail };
