import { useCallback, useState } from 'react';

import AuthContext from './index';
import { getProducts, login, register, UserRegister, order, wallet } from "./authActions";
import { toast } from 'react-toastify';

const AuthProvider = ({ children }: any) => {

  const [products, setProducts] = useState([]);
  const [currentOrder, setOrder] = useState([]);
  const [currentWallet, setWallet] = useState([]);

  const HandleLogin = useCallback((email, password, history) => {
    return new Promise((resolve, reject) => {
      login(email, password, history)
        .then((res) => {
          const { data } = res;

          localStorage.setItem('@user-isAuth', 'true');
          localStorage.setItem('@user-token', data.token);
          localStorage.setItem(
            '@user-data',
            JSON.stringify({
              email: data?.user?.email,
            }),
          );
          resolve({ status: 'ok' });
          history.push('/');
        })
        .catch((error) => {
          reject('Invalid credentials');
          if (error.response?.data?.data?.error?.validationError === "ValidationError") {
            toast.error("Invalid credentials");
          } else {
            toast.error("Connection error");
          }
        })
    })
  }, []);

  const HandleGetProducts = useCallback((history) => {
    getProducts(history)
      .then((res) => {
        const { data } = res?.data;
        setProducts(data);
      })
  }, []);


  const HandleRegister = useCallback((objReq: UserRegister, history) => {
    register(objReq, history)
      .then((res) => {
        const { data, headers } = res;
        localStorage.setItem('@admin-isAuth', 'true');
        localStorage.setItem('@admin-token', headers?.authorization);
        localStorage.setItem(
          '@admin-data',
          JSON.stringify({
            email: data?.user?.email,
            username: data?.user?.username,
            name: data?.user?.name,
            country: data?.user?.country,
          }),
        );
        history.push('/home');
      })
      .catch((error) => {
        if (error.response?.data?.error) {
          toast.error(`Credenciales inválidas: ${error.response?.data?.message}`);
        } else {
          toast.error("Connection error");
        }
      });
  }, []);

  const HandleOrder = useCallback((history, token) => {
    order(token)
      .then((res) => {
        setOrder(res.data)
      })
      .catch((error) => {
        if (error.response?.data?.error) {
          toast.error(`Credenciales inválidas: ${error.response?.data?.message}`);
        } else {
          toast.error("Connection error");
        }
      });
  }, []);

  const HandleWallet = useCallback((history, token) => {
    wallet(token)
    // .then((res) => {
    //   setWallet(res.data)
    // })
    // .catch((error) => {
    //   if (error.response?.data?.error) {
    //     toast.error(`Credenciales inválidas: ${error.response?.data?.message}`);
    //   } else {
    //     toast.error("Connection error");
    //   }
    // });
  }, []);

  const handleLogout = useCallback((history) => {
    localStorage.setItem('@admin-isAuth', 'false');
    localStorage.removeItem('@admin-token');
    localStorage.removeItem('@admin-token');
    localStorage.removeItem('countryName');
    history.push('/')
  }, []);




  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: () => JSON.parse(localStorage.getItem('@user-isAuth') || 'false'),
        onLogin: HandleLogin,
        onRegister: HandleRegister,
        onLogout: handleLogout,
        getProducts: HandleGetProducts,
        getOrder: HandleOrder,
        getWallet: HandleWallet,
        products,
        currentOrder,
        wallet
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
