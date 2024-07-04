import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export const CardBasic = () => {
  return (
    <Card style={{width: '20%'}} sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          First Card
        </Typography>
        <Typography variant="h5" component="div">
          This is a basic card
        </Typography>
        <Typography variant="body2">
          We can use this card to show basic info in a website
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}
