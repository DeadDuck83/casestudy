import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { gsap } from "gsap/dist/gsap";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);



const AvalonAnimation = () => {
  // set up initial states
  useEffect(() => {
    // set initial states
  gsap.timeline() 
  .set('#animationContainer', { transformOrigin:'0 0', left:'50%', top:'50%'})
  .from('#animationContainer', {opacity:0, ease:'power1.inOut', duration:1}, 0.3)
  
  //tween the svg path + circle
  gsap.timeline({defaults:{ease:'none'}, scrollTrigger:{trigger:'#animationContainer', start:'top top', end:'top bottom',  scrub:1}}) 
      .to('#c', {motionPath:'#p', immediateRender:true}, 0)
      .from('#p', {drawSVG:'0 0'}, 0)
  
      //move container to follow circle
  let povDelay = 0.1, 
  pos = { x:200, y:200 },
  xSet = gsap.quickSetter('#animationContainer', "x", "px"),
  ySet = gsap.quickSetter('#animationContainer', "y", "px");
  
  gsap.ticker.add(() => {  
    pos.x += (-gsap.getProperty('#c', 'x') - pos.x) * povDelay;
    pos.y += (-gsap.getProperty('#c', 'y') - pos.y) * povDelay;
    xSet(pos.x);
    ySet(pos.y);
  });
  
  // window.onresize = ()=> { gsap.set('#animationContainer', {left:window.innerWidth/2, top:window.innerHeight/2}); }
  
  }, [])


  return (
    <div className="relative overflow-x-hidden h-72">
      {/* <div id="scrollDist" className="absolute w-screen h-screen"></div> */}
      <div id="animationContainer" className="absolute min-w-full  h-72">
        <img src="/images/avalon.jpg" alt="island" className="absolute w-screen" />

        {/* <svg className="absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101.21 116.64">
        <circle cx="44.02" cy="1.24" r="1.24" fill="#00ff8c" />
        <path d="M44 1.24s10.22.89 8 4S47.57 11 30.23 9.69s-20.45 0-20 4 .81 13.78 0 17.78 11.6 9.78 10.26 13.34S-2.66 58.59.89 63.93s18.67 14.22 29.34 17.78 32.46 14.23 41.35 8 8-12 10.67-14.22 18.23-10.23 18.23-10.23a63.61 63.61 0 01-5.78 14.67c-4 7.11-8 15.12-18.67 20s-28.46 11.11-32.46 12.89-9.33 6.22-17.78.45a68.2 68.2 0 00-15.12-8" fill="none" stroke="#0ff" stroke-miterlimit="10" />
        
        </svg> */}
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" className="absolute w-full h-full">
        <circle id="c" r="10" fill="#f00" />
          <path id="p" fill="none" stroke="#f00" strokeWidth="5" d="M376.7,428.78s10.23.89,8,4-4.45,5.78-21.79,4.45-20.45,0-20,4,.81,13.78,0,17.78,11.59,9.78,10.26,13.34S330,486.13,333.58,491.47s18.67,14.22,29.34,17.78,32.46,14.23,41.35,8,8-12,10.67-14.22,18.23-10.23,18.23-10.23a63.61,63.61,0,0,1-5.78,14.67c-4,7.12-8,15.12-18.68,20s-28.45,11.11-32.45,12.89-9.34,6.23-17.78.45a68.2,68.2,0,0,0-15.12-8" />
          
        </svg>
      </div>
    </div>
  )
}

AvalonAnimation.propTypes = {

}

export default AvalonAnimation
