import React from "react";
import PropTypes from "prop-types";
import LargeBackgroundSectionWrapper from "./LargeBackgroundSection.styled";
import Image from "next/image";
import ScrollDown from "../ScrollDown";


const bgImage = React.createRef();

const LargeBackgroundSection = () => {

  // animate the thing:
  function doSomething() {
    bgImage.current.setAttribute('class', 'demo bgwrap');
  }


  React.useEffect(() => {
    console.log(bgImage.current.getBoundingClientRect());
    // first: get the current bounds
    let first = bgImage.current.getBoundingClientRect();

    // execute the script that causes layout to change
    doSomething();

    // last: get the final bounds
    const last = bgImage.current.getBoundingClientRect();

    // Invert: determine the delta between the
    // first and last bounds to invert the element
    const deltaX = first.left - last.left;
    const deltaY = first.top - last.top;
    const deltaW = first.width / last.width;
    const deltaH = first.height / last.height;

    // Play: animate the final element from its first bounds
    // to its last bounds (which is no transform)
    bgImage.current.animate([{
      transformOrigin: 'top left',
      transform: `
        translate(${deltaX}px, ${deltaY}px)
        scale(${deltaW}, ${deltaH})
      `
    }, {
      transformOrigin: 'top left',
      transform: 'none'
    }], {
      duration: 300,
      easing: 'ease-in-out',
      fill: 'both'
    });



  }, [bgImage.current]);

  return (
    <LargeBackgroundSectionWrapper>
      <div className="bgwrap" ref={bgImage}>
        <Image
        src="/images/smaller-bg2.jpg"
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      </div>
      <div className="centerContent">
        <h1 style={{paddingBottom: '1rem' }}>Derek Moore</h1>
        <p>Front-End Developer / UX Designer</p>
        <button type="button" className="btn" onClick={(e)=>{console.log('clicked!', e.target.innerHTML)}}>
          Download Resume
        </button>
      </div>


      <ScrollDown />
    </LargeBackgroundSectionWrapper>
  );
};

LargeBackgroundSection.propTypes = {};

export default LargeBackgroundSection;
