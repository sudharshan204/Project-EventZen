import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Outlet } from 'react-router-dom';
import wed from '../Images/wedding.jpeg';
import { useNavigate } from 'react-router-dom';
export default function EventCard1() {
  const navigate=useNavigate();
  const Click = () =>
    {
        navigate('/w')
    }
  return (
    <Card sx={{ maxWidth: 345,
      minWidth: 275,
      transition: 'transform 0.2s',
      '&:hover': {
        transform: 'scale(1.05)',
      },
      
     }}onClick={Click} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={wed}
         
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color={'black'}>
           Weddings 
          </Typography>
          <Typography variant="body2" color="text.secondary">
          With every last detail taken care of, we're here to ensure the day you've always dreamed of will be the day you'll never forget.
          </Typography>
        </CardContent>
      </CardActionArea>
      <Outlet/>
    </Card>
  );
}