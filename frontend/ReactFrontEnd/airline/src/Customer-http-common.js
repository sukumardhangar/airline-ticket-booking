import axios from 'axios';
const jwtToken=sessionStorage.getItem("jwt");

const CustomerAxios= axios.create({
  baseURL: 'http://localhost:8080/',
  headers: {
    'Content-Type': 'application/json',
  },
});

// baseURL: apiUrl,
// headers: {
//   'Authorization': `Bearer ${jwtToken}`
const OperatorAxios= axios.create({
  baseURL: 'http://localhost:7066/operator/',
  headers: {
   // 'Content-Type': 'application/json',
   'Authorization': `Bearer ${jwtToken}`
  },
});

const AdminAxios= axios.create({
  baseURL: 'http://localhost:9999/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default { CustomerAxios, OperatorAxios, AdminAxios };
