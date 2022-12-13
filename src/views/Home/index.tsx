import { useState, useContext, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import parse from 'html-react-parser';

import AuthContext from '../../context/auth';
import Login from '../Login';
import MediaCard from '../../components/common/card/MediaCard';
import { Grid } from '@mui/material';
import Header from '../../components/layouts/Header';

const currentProd = {
  data: [
    {
      id: 1,
      created_at: '2022 - 12 - 12T23: 15: 24-05: 00',
      updated_at: '2022 - 12 - 12T23: 15: 24-05: 00',
      name: 'TRIREY MEZCLA DE ESPECIAS.CONDIMENTOS Y CALDO DE GALLINA 55 GR',
      ean: '97702175111293',
      description: 'UND',
      price: 1400,
      status: true,
      url: 'https://cdn.quqo.com/images/products/1606409346-21027.png'
    },
    {
      id: 2,
      created_at: '2022 - 12 - 12T23: 15: 24-05: 00',
      updated_at: '2022 - 12 - 12T23: 15: 24-05: 00',
      name: 'TRIREY MEZCLA DE ESPECIAS.CONDIMENTOS Y CALDO DE GALLINA 55 GR',
      ean: '97702175111293',
      description: 'UND',
      price: 1400,
      status: true,
      url: 'https://cdn.quqo.com/images/products/1606409346-21027.png'
    },
    {
      id: 2,
      created_at: '2022 - 12 - 12T23: 15: 24-05: 00',
      updated_at: '2022 - 12 - 12T23: 15: 24-05: 00',
      name: 'TRIREY MEZCLA DE ESPECIAS.CONDIMENTOS Y CALDO DE GALLINA 55 GR',
      ean: '97702175111293',
      description: 'UND',
      price: 1400,
      status: true,
      url: 'https://cdn.quqo.com/images/products/1606409346-21027.png'
    },
    {
      id: 2,
      created_at: '2022 - 12 - 12T23: 15: 24-05: 00',
      updated_at: '2022 - 12 - 12T23: 15: 24-05: 00',
      name: 'TRIREY MEZCLA DE ESPECIAS.CONDIMENTOS Y CALDO DE GALLINA 55 GR',
      ean: '97702175111293',
      description: 'UND',
      price: 1400,
      status: true,
      url: 'https://cdn.quqo.com/images/products/1606409346-21027.png'
    },
    {
      id: 2,
      created_at: '2022 - 12 - 12T23: 15: 24-05: 00',
      updated_at: '2022 - 12 - 12T23: 15: 24-05: 00',
      name: 'TRIREY MEZCLA DE ESPECIAS.CONDIMENTOS Y CALDO DE GALLINA 55 GR',
      ean: '97702175111293',
      description: 'UND',
      price: 1400,
      status: true,
      url: 'https://cdn.quqo.com/images/products/1606409346-21027.png'
    },
    {
      id: 2,
      created_at: '2022 - 12 - 12T23: 15: 24-05: 00',
      updated_at: '2022 - 12 - 12T23: 15: 24-05: 00',
      name: 'TRIREY MEZCLA DE ESPECIAS.CONDIMENTOS Y CALDO DE GALLINA 55 GR',
      ean: '97702175111293',
      description: 'UND',
      price: 1400,
      status: true,
      url: 'https://cdn.quqo.com/images/products/1606409346-21027.png'
    },
    {
      id: 2,
      created_at: '2022 - 12 - 12T23: 15: 24-05: 00',
      updated_at: '2022 - 12 - 12T23: 15: 24-05: 00',
      name: 'TRIREY MEZCLA DE ESPECIAS.CONDIMENTOS Y CALDO DE GALLINA 55 GR',
      ean: '97702175111293',
      description: 'UND',
      price: 1400,
      status: true,
      url: 'https://cdn.quqo.com/images/products/1606409346-21027.png'
    },
    {
      id: 2,
      created_at: '2022 - 12 - 12T23: 15: 24-05: 00',
      updated_at: '2022 - 12 - 12T23: 15: 24-05: 00',
      name: 'TRIREY MEZCLA DE ESPECIAS.CONDIMENTOS Y CALDO DE GALLINA 55 GR',
      ean: '97702175111293',
      description: 'UND',
      price: 1400,
      status: true,
      url: 'https://cdn.quqo.com/images/products/1606409346-21027.png'
    },
  ]
}


interface IRoutes {
  id: number,
  platform: string,
  path: string,
  component: any
}

const Home = () => {
  const { pathname } = useLocation();
  const history = useHistory();
  const { isAuthenticated, getProducts, products } = useContext<any>(AuthContext);
  const [itemsSelected, setItemsSelected] = useState<any>()

  const handleGetProducts = async () => {
    try {
      await getProducts(history);
    } catch (e) {
      console.log('error', e);
    }
  }

  useEffect(() => {
    // Si no esta autenticado
    handleGetProducts()
    console.log(products)

    if (!isAuthenticated()) history.replace('/');
    // eslint-disable-next-line
  }, [])



  return (
    <>
      <Header />
      <Grid container margin={'200px auto 200px auto'} width={'80%'} spacing={2}>
        {
          currentProd?.data.map((item, index) => (
            <Grid key={`item${index}`} item xs={6} md={3}>
              <MediaCard itemsSelected={itemsSelected} setItemsSelected={setItemsSelected} data={item} />
            </Grid>
          ))
        }
      </Grid>
    </>
  );
};

export default Home;
