import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ComplexCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Colombia"
        subheader="July 07, 2024"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://th.bing.com/th/id/R.1b0a61524a57eccc7e2a585bf8e540a5?rik=%2fLpXkpbnJbMoHw&pid=ImgRaw&r=0"
        alt="Colombia"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
            Colombia es un país sudamericano que ofrece experiencias diversas y cautivadoras para los viajeros.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>About Colombia:</Typography>
          <Typography paragraph>
          Desde las vibrantes ciudades de Bogotá y Medellín, hasta las exuberantes selvas del Amazonas y los Andes, pasando por las impresionantes playas del Caribe y el Pacífico, Colombia tiene algo para todos. Puedes explorar la rica cultura e historia de Colombia, con su arquitectura colonial, su herencia indígena y sus coloridos festivales. También puedes disfrutar de la belleza natural y la fauna de Colombia, con su flora y fauna exóticas, sus paisajes escénicos y sus parques nacionales. Ya sea que busques aventura, relajación o inspiración, Colombia es un destino que te recibe con los brazos abiertos
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}