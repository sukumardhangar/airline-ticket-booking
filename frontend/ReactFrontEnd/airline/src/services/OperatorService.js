import allaxios from '../Customer-http-common';


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









export default { editOperator,addOperator,addFlightDetails,getOperator,getFlightDetilsByAirLineNumber,getAllFLightOfOperator };
