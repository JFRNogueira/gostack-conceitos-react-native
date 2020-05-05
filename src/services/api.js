import axios from "axios";

const api = axios.create({
  //baseURL: 'http://189.47.64.227:3333'
  baseURL: 'http://10.0.2.2:3333',
  //baseURL: 'http://localhost:3333/'
});

export default api;
