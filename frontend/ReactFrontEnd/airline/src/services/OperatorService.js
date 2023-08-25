import allaxios from '../Customer-http-common';
import axios from 'axios';


//operator controller
const operatorAxios=allaxios.OperatorAxios;

const editOperator = (data) => {
    return operatorAxios.put('editOperator', data);
  };

const addOperator = (data) => {
  return operatorAxios.post('addOperator', data);
};

const addFlightDetails = (data) => {
    return operatorAxios.post('addFlightDetails', data);
  };


  const getOperator = (id) => {
    return operatorAxios.get(`getOperator/${id}`);
  };

  const getFlightDetilsByAirLineNumber = (id) => {
    return operatorAxios.get(`getFlightDeatilByAirlineNumber/${id}`);
  };

  const getAllFLightOfOperator = (id) => {
    return operatorAxios.get(`getAllFlightOfOpeartor/${id}`);
  };

  const loginAsOperator = (data) => {
    return  axios.create({
      baseURL: 'http://localhost:7066/',
      headers: {
        'Content-Type': 'application/json',
      },
    }).post('auth/signin', data);


};
    






export default { editOperator,addOperator,addFlightDetails,getOperator,getFlightDetilsByAirLineNumber,getAllFLightOfOperator,loginAsOperator };
