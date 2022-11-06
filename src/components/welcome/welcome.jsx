//React
import { init } from 'ityped'
import {useEffect, useRef, useState} from 'react'
import sketch from './sketches/sketch';
import Sketch from "react-p5";

//Styling
import './welcome.scss'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
export default function Welcome() {

  const textRef = useRef();
  const [color,setColor] = useState([Math.random()*255, Math.random()*255, Math.random()*255]);

  const randomColor = ()=> {
    setColor([Math.random()*255, Math.random()*255, Math.random()*255])}
  
    const sketchy = () => {
        <p> buh</p>
    }

    let x = 50;
	let y = 50;
    const setup = (p5, canvasParentRef) => {
      p5.createCanvas(1080, 600).parent(canvasParentRef);
    };

	const draw = (p5) => {
		p5.background(0);
		p5.ellipse(x, y, 70, 70);
		// NOTE: Do not use setState in the draw function or in functions that are executed
		// in the draw function...
		// please use normal variables or class properties for these purposes
		x++;
	};

  return (
    <div className='Simulation' id='Game'>
        <div id='sim'>

        
       
        <Sketch setup={setup} draw={draw} />
      
      
        </div>
    </div>
  )
}
