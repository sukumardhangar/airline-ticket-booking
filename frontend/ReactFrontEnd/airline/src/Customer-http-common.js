import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:8080/',
  headers: {
    'Content-Type': 'application/json',
  },
});

// const OperatorAxios= axios.create({
//   baseURL: 'http://localhost:7066/operator/',
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// const AdminAxios= axios.create({
//   baseURL: 'http://localhost:9999/',
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

//export default { CustomerAxios, OperatorAxios, AdminAxios };
