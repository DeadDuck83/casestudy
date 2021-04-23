import React from 'react'
import PropTypes from 'prop-types'
import ScrollDownWrapper from './ScrollDown.styled';
import { ChevronsDown } from 'react-feather';
import { gsap } from "gsap/dist/gsap";

const downArrow = React.createRef();

const ScrollDown = () => {
  let tl = gsap.timeline({repeat: 1, repeatDelay: 1})

  React.useEffect(() => {
    tl.to(downArrow.current, {duration: 0.5, ease: "power2.out", y: -30 } );
    tl.to(downArrow.current, {duration: 0.5, ease: "power2.in", y: 0 } );
    gsap.to(downArrow.current, {duration: 1, ease: "power2.out", opacity: 0, y: -30, delay: 4 })
  }, [downArrow])
  return (
    <ScrollDownWrapper className="action">

<ChevronsDown ref={downArrow} color="var(--banana)" size={30} />

    </ScrollDownWrapper>
  )
}

ScrollDown.propTypes = {

}

export default ScrollDown
