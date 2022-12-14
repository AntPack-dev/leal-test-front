import { useState, useContext, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import parse from 'html-react-parser';


import bgImage from '../../assets/images/Screen_Shot_2022-12-13_at_5.44.17_PM-removebg-preview.png'

import Login from '../Login';
import MediaCard from '../../components/common/card/MediaCard';
import { Grid } from '@mui/material';
import Header from '../../components/layouts/Header';
import CustomTable from '../../components/common/table/table';
import axios from 'axios';

const data = {
  id: 7,
  balance: 12731,
  user_id: 1,
  transactions: [
    {
      id: 10,
      created_at: '2022 - 12 - 13T02: 44: 20.348Z',
      updated_at: '2022 - 12 - 13T02: 44: 20.348Z',
      amount: 3634.5,
      description: 'Recarga Puntos',
      order_id: 12,
      user_id: 1,
      user: null
    },
    {
      id: 11,
      created_at: '2022 - 12 - 13T02: 44: 31.422Z',
      updated_at: '2022 - 12 - 13T02: 44: 31.422Z',
      amount: 3634.5,
      description: 'Recarga Puntos',
      order_id: 13,
      user_id: 1,
      user: null
    },
    {
      id: 12,
      created_at: '2022 - 12 - 13T02: 44: 43.565Z',
      updated_at: '2022 - 12 - 13T02: 44: 43.565Z',
      amount: 3634.5,
      description: 'Recarga Puntos',
      order_id: 14,
      user_id: 1,
      user: null
    },
    {
      id: 17,
      created_at: '2022 - 12 - 13T03: 59: 31.45Z',
      updated_at: '2022 - 12 - 13T03: 59: 31.45Z',
      amount: 500,
      description: 'Suma Puntos',
      order_id: 0,
      user_id: 1,
      user: null
    },
    {
      id: 18,
      created_at: '2022 - 12 - 13T04: 00: 10.547Z',
      updated_at: '2022 - 12 - 13T04: 00: 10.547Z',
      amount: 1500,
      description: 'Suma Puntos',
      order_id: 0,
      user_id: 1,
      user: null
    },
    {
      id: 19,
      created_at: '2022 - 12 - 13T04: 00: 29.854Z',
      updated_at: '2022 - 12 - 13T04: 00: 29.854Z',
      amount: 100,
      description: 'Suma Puntos',
      order_id: 0,
      user_id: 1,
      user: null
    },
    {
      id: 20,
      created_at: '2022 - 12 - 13T04: 00: 50.387Z',
      updated_at: '2022 - 12 - 13T04: 00: 50.387Z',
      amount: 3634.5,
      description: 'Recarga Puntos',
      order_id: 15,
      user_id: 1,
      user: null
    },
    {
      id: 21,
      created_at: '2022 - 12 - 13T04: 05: 44.579Z',
      updated_at: '2022 - 12 - 13T04: 05: 44.579Z',
      amount: 10000,
      description: 'Resta Puntos',
      order_id: 0,
      user_id: 1,
      user: null
    },
    {
      id: 22,
      created_at: '2022 - 12 - 13T04: 05: 58.414Z',
      updated_at: '2022 - 12 - 13T04: 05: 58.414Z',
      amount: 638,
      description: 'Resta Puntos',
      order_id: 0,
      user_id: 1,
      user: null
    },
    {
      id: 23,
      created_at: '2022 - 12 - 13T21: 53: 59.764Z',
      updated_at: '2022 - 12 - 13T21: 53: 59.764Z',
      amount: 100,
      description: 'Suma Puntos',
      order_id: 0,
      user_id: 1,
      user: null
    },
    {
      id: 24,
      created_at: '2022 - 12 - 13T21: 54: 05.525Z',
      updated_at: '2022 - 12 - 13T21: 54: 05.525Z',
      amount: 638,
      description: 'Resta Puntos',
      order_id: 0,
      user_id: 1,
      user: null
    },
    {
      id: 25,
      created_at: '2022 - 12 - 13T21: 57: 08.25Z',
      updated_at: '2022 - 12 - 13T21: 57: 08.25Z',
      amount: 3634.5,
      description: 'Recarga Puntos',
      order_id: 16,
      user_id: 1,
      user: null
    },
    {
      id: 26,
      created_at: '2022 - 12 - 13T21: 57: 26.846Z',
      updated_at: '2022 - 12 - 13T21: 57: 26.846Z',
      amount: 3634.5,
      description: 'Recarga Puntos',
      order_id: 17,
      user_id: 1,
      user: null
    }
  ]
}

const Home = () => {
  const history = useHistory();
  const [itemsSelected, setItemsSelected] = useState<any>()
  const [products, setProducts] = useState<any>()
  const [theme, setTheme] = useState<any>(true)

  const handleGetProducts = async () => {
    axios({
      method: 'get',
      url: 'http://3.138.205.220:4030/api-v1/products',
    })
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const handleGetOrder = async (token: any, history: any) => {

  }
  const handleGetWallet = async (token: any, history: any) => {

  }

  useEffect(() => {
    // eslint-disable-next-line
    handleGetProducts()
    var data = JSON.stringify({
      "email": "yeisson.gutierrez@antpack.co",
      "password": "yei12345"
    });

    axios({
      method: 'post',
      url: 'http://3.138.205.220:8084/api-v1/auth/login',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    })
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])



  return (
    <>
      <Header itemsSelected={itemsSelected} setItemsSelected={setItemsSelected} setTheme={setTheme} theme={theme} />
      <div style={{ background: (theme ? "rgb(255, 156, 91)" : "#D9EEEF") }}>
        <Grid container className='pointSeccion'>
          <Grid>
            <img src={bgImage} alt="" />
          </Grid>
          <Grid className='pointSeccionTable'>
            <h1>Balance: {data.balance}</h1>
            <CustomTable data={data.transactions} />
          </Grid>
        </Grid>
        <Grid style={{ zIndex: 2 }} container margin={'50px auto 0 auto'} padding={'100px 0'} width={'80%'} spacing={2}>
          {
            products ?
              <>
                {
                  products?.map((item: any, index: number) => (
                    <Grid key={`item${index}`} item xs={12} sm={6} md={4} lg={3}>
                      <MediaCard itemsSelected={itemsSelected} setItemsSelected={setItemsSelected} data={item} />
                    </Grid>
                  ))
                }
              </>
              : <></>

          }
        </Grid>
      </div>
    </>
  );
};

export default Home;
