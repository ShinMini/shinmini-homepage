import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL;

const API = axios.create({
  baseURL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
  },
  withCredentials: true,
});
axios.defaults.withCredentials = true;

export const test = () => {
  console.log(baseURL);
  const result = API.get('/test');
  return result;
};

export default API;
