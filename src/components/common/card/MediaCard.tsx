import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { MediaCardStyle } from '../../../styles/components/common/card/MediaCardStyle';
import BuyForm from '../buyForm/buyForm';


interface mediaCardProps {
  data: any,
  itemsSelected: any,
  setItemsSelected: any,
}

export default function MediaCard({ data, itemsSelected, setItemsSelected }: mediaCardProps) {
  return (
    <Card sx={{ maxWidth: 255 }} className={MediaCardStyle}>
      <div style={{ height: '140px', overflow: 'hidden' }}>
        <CardMedia
          className='itemImage'
          component="img"
          height="140"
          image={data.url}
          alt="green iguana"
        />
      </div>
      <CardContent>
        <Typography gutterBottom variant="body1" component="div">
          {data?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data?.description}
        </Typography>
      </CardContent>
      <CardActions style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h4>
          ${data.price}
        </h4>
        <Button onClick={() => {
          if (itemsSelected) {
            setItemsSelected([...itemsSelected, data])
          } else {
            setItemsSelected([data])
          }
        }} style={{ height: '30px' }} variant='outlined'>add</Button>
        <BuyForm itemsSelected={itemsSelected} setItemsSelected={setItemsSelected} product={data} />
      </CardActions>
    </Card>
  );
}