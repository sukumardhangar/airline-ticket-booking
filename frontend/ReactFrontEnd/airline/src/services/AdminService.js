import allaxios from '../Customer-http-common';

//admin.js
const AdminAxios=allaxios.AdminAxios;


const getAllAprrovedOperator = (status) => {
  return AdminAxios.get(`operator/${status}`);
};

const ToChangeStatus = (id,data) => {
  return AdminAxios.put(`operator/${id}`, data);
};


const deleteOpr = (id) => {
  return AdminAxios.delete(`operator/${id}`);
};

const GetAdminProfile = (id) => {
  return AdminAxios.get(`operator/profile/${id}`);
};

const adminLogin = (data) => {
  return AdminAxios.patch(`operator/`,data);
};


const EditAdminProfile = (data) => {
  return AdminAxios.put('flight', data);
};


//









const GetAllOperator = () => {
  return AdminAxios.get('admin');
};


//flight.js

const GetAllFlightDetail = () => {
  return AdminAxios.get('flight');
};

const GetFlightDetailForOperator = (id) => {
  return AdminAxios.get(`flight/${id}`);
};



export default { GetAllOperator, ToChangeStatus, EditAdminProfile, GetAdminProfile, GetAllFlightDetail ,getAllAprrovedOperator,deleteOpr,adminLogin};
