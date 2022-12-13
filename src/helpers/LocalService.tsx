
import jwt_decode from "jwt-decode";

const LocalService = {
  setItemLocal: (key: string, value: any) => {

    let _value = value;

    if (typeof (value) != 'string') {
      _value = JSON.stringify(value);
    }

    localStorage.setItem(key, _value);
  },

  getItemLocal: (key: string) => {

    let value;

    try {
      value = JSON.parse(localStorage.getItem(key)!);
    } catch (error) {
      value = localStorage.getItem(key);
    }

    return value || null;
  },

  removeItemLocal: (key: string) => {
    localStorage.removeItem(key);
  },

  clearLocal: () => {
    localStorage.clear();
  },

  setItemSession: (key: string, value: any) => {

    let _value = value;

    if (typeof (value) != 'string') {
      _value = JSON.stringify(value);
    }

    sessionStorage.setItem(key, _value);
  },

  getItemSession: (key: string) => {

    let value;

    try {
      value = JSON.parse(sessionStorage.getItem(key)!);
    } catch (error) {
      value = sessionStorage.getItem(key);
    }

    return value || null;
  },

  removeItemSession: (key: string) => {
    sessionStorage.removeItem(key);
  },

  clearSession: () => {
    sessionStorage.clear();
  },

  getTokenInfo: () => {
    let token = LocalService.getItemLocal('tku');

    try {
      return jwt_decode(token);
    } catch (error) {
    } finally {
      return null;
    }
  }
}

export default LocalService;