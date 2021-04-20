import React, { useEffect } from "react";
import PropTypes from "prop-types";
import AvalonAnimationWrapper from "./AvalonAnimation.styled";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ocean = React.createRef();
const islandTop = React.createRef();
const islandMiddle = React.createRef();
const landmarks = React.createRef();

const AvalonAnimation = () => {
  const [height, setHeight] = React.useState(0)
  // The motion of the ocean:
  useEffect(() => {
    const oceanTl = gsap.timeline({
      repeat: -1,
      ease: "power4.inOut",
      yoyo: true,
    });
    oceanTl.to(ocean.current, { x: 3, y: 1, duration: 2 });
    oceanTl.to(ocean.current, { x: 0, y: 2, duration: 2 });
    oceanTl.to(ocean.current, { x: -3, y: 1, duration: 2 });
    oceanTl.to(ocean.current, { x: 0, y: 0, duration: 2 });

    // island into view:
    // gsap.from([islandMiddle.current, islandTop.current], {
    //   scale: 0,
    //   duration: 0.4,
    //   ease: "bounce.out",
    //   delay: 2,
    // });
  }, []);

  return (
    <AvalonAnimationWrapper>
      <p >avalon animation</p>
      <div className="elWrapper">

        <img src="/images/island-background.jpg" alt="" />
        <img ref={ocean} src="/images/ocean.png" alt="" />
        <img src="/images/grid-layer-01.png" alt="" />
        <svg
          ref={islandMiddle}
          version="1.1"
          id="island-layer1"
          xmlns="http://www.w3.org/2000/svg"
          x="0"
          y="0"
          viewBox="0 0 1280 1024"
        >
          <defs>
            <filter id="middleLand">
              <feGaussianBlur in="SourceAlpha" stdDeviation="8" />
              <feOffset dx="0" dy="12" result="offsetblur" />
              <feFlood
                floodColor="000"
                floodOpacity="0.2"
                result="offsetColor"
              />
              <feComposite
                in="offsetColor"
                in2="offsetblur"
                operator="in"
                result="offsetBlur"
              />
              <feMerge>
                <feMergeNode />
                <feMergeNode in="offsetBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            filter="url(#middleLand)"
            id="middle-land"
            d="M1134.7 678.7c-11.9-11.8-24.3-24-35.2-37.8-40.1-50.6-56.4-115.5-68.1-178.1-4.2-22.7-13.9-42.4-29.6-60.3-13.4-15.3-30.9-29.2-55.2-43.7-44.5-26.7-91.6-44.4-144-54.3-45-8.4-93.8-11.2-153.7-8.7-33 1.4-59.2.1-82.4-4.2-31-5.7-56.5-16.6-78.2-33.3-17.7-13.7-32.1-30.9-46.1-47.6-6.7-8-13.7-16.4-20.7-23.9-36.7-39.4-80.5-57.3-125.8-73.6-50.2-18-89.2-29.2-134.3-7.9-29.3 13.8-76.9 59.9-85 100.8-3 15.1-.1 27.7 8.8 38.6 8.1 9.9 22.6 13.8 35.5 16.7 32.2 7.2 66.4 8.4 99.4 9.5 38.2 1.3 77.6 2.6 115.7 13.1 27.1 7.5 49.9 19.7 67.7 36.4 20.8 19.5 33.6 44 38.2 72.9 10.1 64 12.9 129.4 8.2 194.4-1.4 19.5-4.3 39-7 58-7.2 48.9-13.9 95.1 2.9 139.3 9.1 24 29.7 59.1 76.1 90.4 33.1 22.3 72.8 37.6 109 41.9 46.1 5.5 92.8-4.5 137.9-14.1 65.5-14 133.2-28.4 202.4 2.2 8.3 3.6 15.8 7.6 23.1 11.5 13.6 7.1 26.4 13.9 41.3 17.1 25.6 5.5 50.2 5.5 73-.1 38.1-9.4 68.1-38.2 82.5-79 14.8-42 9.8-89.2-13.3-126.2-11.5-18.8-26.8-33.9-43.1-50z"
            fill="#b1c7b3"
          />
        </svg>
        <svg
          ref={islandTop}
          version="1.1"
          id="island-layer"
          xmlns="http://www.w3.org/2000/svg"
          x="0"
          y="0"
          viewBox="0 0 1280 1024"
        >
          <defs>
            <filter id="topLand">
              <feGaussianBlur in="SourceAlpha" stdDeviation="8" />
              <feOffset dx="0" dy="12" result="offsetblur" />
              <feFlood
                floodColor="000"
                floodOpacity="0.2"
                result="offsetColor"
              />
              <feComposite
                in="offsetColor"
                in2="offsetblur"
                operator="in"
                result="offsetBlur"
              />
              <feMerge>
                <feMergeNode />
                <feMergeNode in="offsetBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            filter="url(#topLand)"
            id="top-land"
            d="M1162.3 739.6c-10.3-16.5-24.8-30.8-40.2-46l.4-.5-.4.5c-12.3-12.2-25.1-24.8-36.8-39.5-43-54.2-60.1-122.1-72.3-187.5-3.5-18.7-11.6-35.1-24.8-50.2-12-13.7-28.2-26.5-50.8-40-42.7-25.6-87.9-42.6-138.3-52.1-43.7-8.2-91.4-10.9-149.9-8.4-34.3 1.4-61.6 0-86.1-4.5-33.7-6.2-61.8-18.2-85.7-36.7-19.3-14.9-34.4-33-49-50.5-6.5-7.8-13.3-15.9-20-23.1-33.9-36.4-75.5-53.3-118.7-68.9-47.8-17.2-82.1-27.1-121.4-8.5-25.4 12-67.7 53.5-74.2 86.4-1.7 8.6-.4 14.6 4.4 20.5 4.7 5.8 18.8 8.9 25.5 10.4 30.7 6.9 64.1 8 96.3 9.1 39.1 1.3 79.6 2.7 119.6 13.7 29.9 8.2 55.2 21.9 75.2 40.6 24.1 22.6 39.1 51.3 44.4 85 10.4 65.7 13.2 132.8 8.4 199.5-1.5 20.3-4.4 40.3-7.2 59.6-7 47.9-13.1 89.3 1.7 128.1 8.1 21.2 26.5 52.4 68.7 80.9 30.9 20.8 67.8 35.1 101.4 39.1 43.4 5.2 88.7-4.5 132.5-13.9 38-8.1 76.8-16.4 116.6-16.4 31.4 0 63.4 5.2 96.2 19.6 8.8 3.9 16.6 8 24.2 12 13 6.8 24.3 12.8 36.9 15.5 23.1 5 45.2 5 65.5 0 32-7.9 57.3-32.2 69.4-66.5 12.3-35.8 8.1-75.9-11.5-107.3z"
            fill="#f1eac8"
          />
        </svg>
        <img ref={landmarks} src="/images/island-layer-03.svg" alt="" />
      </div>
    </AvalonAnimationWrapper>
  );
};

AvalonAnimation.propTypes = {};

export default AvalonAnimation;
