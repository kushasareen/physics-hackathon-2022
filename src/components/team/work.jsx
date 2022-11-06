import './work.scss'
import pCards from './cards/personCards' 
import {useState} from 'react'
import { useEffect, useLayoutEffect } from "react";
import 'aos/dist/aos.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Work() {
  const styles = {
    media: {
      height: 250,

    }
};
  const boys = [
    {name: 'Kusha Sareen',
      image: './kusha.png',
    description:'p5.js enjoyer'},
    {name: 'Simon Overgaard',
      image: './simon.png',
    description:'gamma function understander'},
    {name: 'Felix Gottlieb',
      image: './felix.png',
    description:'------'},
    {name: 'Mark Daniel',
      image: './mark.png',
    description:'code monkey'}
  ]

  return (
    <div className='work' id='Team'>
      <div className='title-holder'>
      <h2 className='title'>Team Members</h2>
      <h3 className='title-2'> Meet The Team!</h3>
      <span className='line-2'>er </span>
      </div>

      <div className="container">

      <Card sx={{ minWidth: 250,
      margin:'1.5rem'}}>
      <CardMedia
        component="img"
        style={styles.media} 
     
        image={require('./kusha.png')}
        alt={'kusha'}
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Kusha Sareen
        </Typography>
        <Typography variant="body2" color="text.secondary">
          p5.js enjoyer
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{
                  color: '#BD0224',
                  borderColor: "#BD0224",
                  boxShadow: 'none',
                  ':hover': {
                    bgcolor: "#ce2040", 
                    color: 'white',
                  }

                }}><a id='buh' target='_blank' href="https://p5js.org/reference/" underline="none">Learn More </a></Button>
      </CardActions>
    </Card>

    <Card sx={{ minWidth: 250,
      margin:'1.5rem'}}>
      <CardMedia
        component="img"
        style={styles.media} 
     
        image={require('./kusha.png')}
        alt={'kusha'}
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Simon Overgaard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          gamma function understander
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{
                  color: '#BD0224',
                  borderColor: "#BD0224",
                  boxShadow: 'none',
                  ':hover': {
                    bgcolor: "#ce2040", 
                    color: 'white',
                  }

                }}><a id='buh' target='_blank' href="https://en.wikipedia.org/wiki/Gamma_function" underline="none">Learn More </a></Button>
      </CardActions>
    </Card>

    <Card sx={{ minWidth: 250,
      margin:'1.5rem'}}>
      <CardMedia
        component="img"
        style={styles.media} 
     
        image={require('./kusha.png')}
        alt={'kusha'}
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Felix Gottlieb
        </Typography>
        <Typography variant="body2" color="text.secondary">
          snow monkey at heart
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{
                  color: '#BD0224',
                  borderColor: "#BD0224",
                  boxShadow: 'none',
                  ':hover': {
                    bgcolor: "#ce2040", 
                    color: 'white',
                  }

                }}><a id='buh' target='_blank' href="https://www.popularmechanics.com/science/animals/a19712780/snow-monkeys-love-hot-baths-the-same-reasons-humans-do/" underline="none">Learn More </a></Button>
      </CardActions>
    </Card>

    <Card sx={{ minWidth: 250,
      margin:'1.5rem'}}>
      <CardMedia
        component="img"
        style={styles.media} 
     
        image={require('./kusha.png')}
        alt={'kusha'}
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Mark Daniel
        </Typography>
        <Typography variant="body2" color="text.secondary">
         favorite number is 8
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{
                  color: '#BD0224',
                  borderColor: "#BD0224",
                  boxShadow: 'none',
                  ':hover': {
                    bgcolor: "#ce2040", 
                    color: 'white',
                  }
                  

                }}><a id='buh' target='_blank' href="https://mysticalnumbers.com/number-8/" underline="none">Learn More </a></Button>
      </CardActions>
    </Card>

    </div>
    
    <div id="footer" class="sized content">
      
    {/* <p>© November 2022 </p> */}
    
  </div>
    </div>
  )
}
