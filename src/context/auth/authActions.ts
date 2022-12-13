import axiosInstance from "../../helpers/axiosInstance";

export const login = (email: string, password: string, history: any) => {
  return axiosInstance(history)
    .post('/api/auth/login', { email, password });
}

export const register = (data: UserRegister, history: any) => {
  return axiosInstance(history)
    .post('/users/register', data);
}

export const getProducts = (history: any) => {
  return axiosInstance()
    .get('/api/products/');
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