import { useLayoutEffect } from "react";
import "./portfolio.scss";
import "animate.css/animate.min.css";
import 'aos/dist/aos.css';
import katex from 'katex';
import ReactMarkdown from 'react-markdown';
import RemarkMathPlugin from 'remark-math';
import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

export default function Portfolio() {

  
  const _mapProps = (props) => ({
    // ...props,
    escapeHtml: false,
    plugins: [
      RemarkMathPlugin
    ],
    renderers: {
      // ...props.renderers,
      math: ({ value }) => <BlockMath>{value}</BlockMath>,
      inlineMath: ({ value }) => <InlineMath>{value}</InlineMath>
    }
  });
    
  return (
    <div className="portfolio" id="Explanation">
      
      <h2>
        <span className="bumper"> Explanation </span>
      </h2>
      
      <h3>  Galactic Pong </h3>
      
      <span className="line"> </span>
      
      <div id='explanation'> 


      <p> <span class='title'> What is our project</span> <br></br>
      <ReactMarkdown {..._mapProps()} />

      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, enim! Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptatem sed esse expedita officiis earum architecto harum assumenda atque temporibus? Vitae maxime quos deleniti natus cum debitis necessitatibus, corrupti maiores?   </p>

      <p> <span class='title'> Physics?</span> <br></br>
      

      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, enim! Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptatem sed esse expedita officiis earum architecto harum assumenda atque temporibus? Vitae maxime quos deleniti natus cum debitis necessitatibus, corrupti maiores?  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus fuga fugit sapiente mollitia eius ipsa dolorem alias dicta nobis ipsum at repellat aliquid culpa maxime quisquam velit, consequatur ducimus praesentium nisi. Facere voluptas blanditiis quos officia maiores soluta quaerat. Nemo? </p>


      </div>


    </div>
  );
}
