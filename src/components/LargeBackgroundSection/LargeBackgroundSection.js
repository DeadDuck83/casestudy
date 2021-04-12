import React from "react";
import PropTypes from "prop-types";
import LargeBackgroundSectionWrapper from "./LargeBackgroundSection.styled";
import Image from "next/image";
import ScrollDown from "../ScrollDown";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const bgImage = React.createRef();

const LargeBackgroundSection = () => {
  React.useEffect(() => {
    console.log("here");
    gsap.to(bgImage.current, {
      scrollTrigger: {
        scrub: true,
        trigger: bgImage.current,
        start: "top top",
        end: "bottom top",
        markers: false,
      }, // start the animation when "bgImage" enters the viewport (once)
      y: 200,
    });
  }, []);

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
