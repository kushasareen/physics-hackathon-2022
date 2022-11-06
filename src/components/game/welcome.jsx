//React
import {useEffect, useRef, useState} from 'react'
import Sketchers from './sketches/sketch';
// import useScript from './sketches/useScript';
// import Helmet from "react-helmet";
import ScriptTag from 'react-script-tag';

//Styling
import './welcome.scss'
import Sketch from 'react-p5'
export default function Welcome() {

  const textRef = useRef();

  return (


    <div className='Simulation' id='Game'>
        <div id='sim'>

        <iframe src="https://kushasareen.github.io/galactic_pong/"></iframe>
        </div>
    </div>
  )
}
