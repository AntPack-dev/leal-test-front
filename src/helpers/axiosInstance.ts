/* eslint-disable consistent-return */
import axios, { AxiosRequestHeaders } from 'axios';

const AxiosInstace = (history: any = null, tokenHeader?: any) => {
  const baseURL = 'http://3.138.205.220:4030';

  const headers: AxiosRequestHeaders = {};

  try {
    const token = localStorage.getItem('@admin-token');

    if(tokenHeader){
      headers.Authorization = tokenHeader;
    } else if (token) {
      headers.Authorization = token;
    }
  } catch (e) {
    console.log(e);
  }

  const axiosInstance = axios.create({
    baseURL,
    headers,
  });
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios.defaults.headers.put['Content-Type'] = 'application/json';
  axios.defaults.headers.get['Content-Type'] = 'application/json';

  axiosInstance.interceptors.request.use((request) => request);

  axiosInstance.interceptors.response.use(
    (response) =>
      new Promise((resolve, reject) => {
        resolve(response);
      }),
    (error) => {
      if (!error.response) {
        return new Promise((resolve, reject) => {
          reject(error);
        });
      }
      if (error.response.status === 403 || error.response.status === 401) {
        if (history) {
          //history.replace('/');
        } else {
          // @ts-ignore
          // window.location = '/';
        }
      } else {
        return new Promise((resolve, reject) => {
          reject(error);
        });
      }
    },
  );

  return axiosInstance;
};

export default AxiosInstace;