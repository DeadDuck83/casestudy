import React from 'react';
import PropTypes from 'prop-types';

import { gsap } from "gsap/dist/gsap";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

function GsapLineAnimation() {
  const boxA = React.createRef();
  const boxB = React.createRef();
  const boxC = React.createRef();

  React.useEffect(() => {
    gsap.defaults({ease: "none"});

    gsap.to(boxA.current, { background: '#6082a8', duration: 2 });
    gsap.to(boxB.current, {
      scrollTrigger: {
        scrub: true,
        trigger: boxB.current,
        start: 'top center',
        end: 'bottom center',
        markers: false
      }, // start the animation when ".box" enters the viewport (once)
      x: 500
    });

    // line and ball animation:
    gsap.set(".ball", {xPercent: -50, yPercent: -50})
    let tl = gsap.timeline({
      defaults: {
        duration: 0.05,
        autoAlpha: 1,
        scale: 2,
        transformOrigin: 'center',
        ease: "elastic(2.5, 1)"
      }})
    .to(".ball02, .text01", {}, 0.2)
    .to(".ball03, .text02", {}, 0.33)
    .to(".ball04, .text03", {}, 0.46)

    const action = gsap.timeline({defaults: {duration: 1},
      scrollTrigger: {
        trigger: "#svg",
        scrub: true,
        start: "top center",
        end: "bottom bottom"
      }})
    .to(".ball01", {duration: 0.01, autoAlpha: 1})
    .from(".theLine", {drawSVG: 0}, 0)
    .to(".ball01", {motionPath: {path: ".theLine", alignOrigin: [0.5, 0.5]}}, 0)
    .add(tl, 0);

  }, [])

  const fadeAway = function(clicked) {gsap.to(clicked,{ opacity:0, duration: 1})};


  return (
    <section>
      <div className="containerBox">
        <div ref={boxA} className='box a text-4xl'><p>a</p></div>
        <div ref={boxB} className='box b'><p>Hello, i like to design and code</p></div>
        <div ref={boxC} className='box c'><button type='button' onClick={(e) => fadeAway(e.target.innerText)}>Button</button><p>c</p></div>
      </div>
      <div className="lineMovement">
      <svg id="svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 600 1200">
  <path class="line01 line" d="M 10 200  600 200" ></path>
  <path class="line02 line" d="M 10 400  600 400" ></path>
  <path class="line03 line" d="M 10 600  600 600" ></path>
  <path class="line04 line" d="M 10 800  600 800" ></path>
  <path class="line05 line" d="M 10 1000  600 1000" ></path>
  <text class="text01" x="30" y="190">2018</text>
  <text class="text02" x="30" y="390">2019</text>
  <text class="text03" x="30" y="590">2020</text>

  <path class="theLine"
        d="M -5,0
           Q 450 230 300 450
           T 130 750
           Q 100 850 300 1000
           T 150 1200"
        fill="none" stroke="white" stroke-width="10px" />

  <circle class="ball ball01" r="20" cx="25" cy="25"></circle>
  <circle class="ball ball02" r="20" cx="298" cy="221"></circle>
  <circle class="ball ball03" r="20" cx="347" cy="419"></circle>
  <circle class="ball ball04" r="20" cx="223" cy="621"></circle>

</svg>
      </div>
    </section>
  );
};

GsapLineAnimation.propTypes = {};

export default GsapLineAnimation;
