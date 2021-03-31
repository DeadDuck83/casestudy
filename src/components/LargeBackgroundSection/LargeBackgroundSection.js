import React from 'react'
import PropTypes from 'prop-types'
import LargeBackgroundSectionWrapper from './LargeBackgroundSection.styled';
import backgroundImg from '../../../public/images/smaller-bg.jpg'

const LargeBackgroundSection = () => {
  return (
    <LargeBackgroundSectionWrapper  style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div className="centerContent"><h1>Derek Moore</h1>
        <span>Front-End Developer / UX Designer</span>
        <button type="button" className="btn">Download Resume</button></div>
      <div className="action">Scroll Down</div>
    </LargeBackgroundSectionWrapper>
  )
}

LargeBackgroundSection.propTypes = {

}

export default LargeBackgroundSection
