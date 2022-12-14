
import axiosInstance from "../../helpers/axiosInstance";

export const login = (email: string, password: string, history: any) => {
  return axiosInstance(history)
    .post('/api-v1/auth/login', { email, password });
}

export const register = (data: UserRegister, history: any) => {
  return axiosInstance(history)
    .post('/users/register', data);
}

export const order = (token: any) => {
  return axiosInstance( token)
    .post('/api-v1/orders');
}

export const wallet = (token: any) => {
  return axiosInstance(token)
   .get('/api-v1/wallet');
}

export const getProducts = (history: any) => {
  return axiosInstance()
    .get('/api-v1/products');
}

export interface UserRegister {
  name: string,
  password: string,
  email: string,
  countries_id: string,
  operatorId: string,
  phoneNumber: string,
  chanelId: string,
  city: string,
  ally: string,
}