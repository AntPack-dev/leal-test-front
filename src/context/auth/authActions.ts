import axiosInstance from "../../helpers/axiosInstance";

export const login = (email: string, password: string, history: any) => {
  return axiosInstance(history)
    .post('/api/auth/login', { email, password });
}

export const register = (data: UserRegister, history: any) => {
  return axiosInstance(history)
    .post('/users/register', data);
}


export const resetPassword = (email: string, history: any) => {
  return axiosInstance(history)
  .post('/users/auth/password-reset', { email });
}

export const updatePassword = (password: string, history: any, token: any) => {
  return axiosInstance(history, token)
  .put('/users/auth/password-update', { password });
}

export const getProducts = (history: any) => {
  return axiosInstance()
    .get('/api/products/');
}

export const getAllPartners = (history: any) => {
  return axiosInstance(history)
    .get('/partners');
}

export const addPartnerToUser = (userId: number, partnerId: number, history: any) => {
  const data = {
    data: {
      user: userId,
      partner: partnerId
    }
  }
  return axiosInstance(history)
    .post('/user-partners?populate=user,partner', data);
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