import React from 'react'
import PropTypes from 'prop-types'
import UxUiWrapper from './UiUx.styled';
import Image from 'next/image'

const UiUx = () => {
  return (
    <UxUiWrapper>
      <div className="backgroundImg wrapper" style={{ backgroundImage: `url("/images/desk-backdrop2.jpeg")`}}>
        <div className="intro">
          <h2>What is a Ux/Ui Developer?</h2>
          <p>In short, it's a designer that can develop.</p>
          <p>But, wy is this a good thing?</p>
          <p>As a designer that can develop has the potential to produce a stronger product and one that can get to market quicker. A win win for most companies!</p>
        </div>
        <div className="cards">
          <div className="card ui">
            <Image
              className="cardImg"
              src="/images/ux.gif"
              alt="User Experience User Interface"
              layout="intrinsic"
              height={296}
              width={480}
            />
            <h3>UI/UX-DESIGN</h3>
            <p>UI and UX work hand in hand. You only get great UI withe great UX and vice-versa. Take a look at some of my Graphic Design and UI work on my Behance Portfolio.</p>
            <button type="button" className="button"></button>
          </div>
          <div className="card dev">
            <Image
              className="cardImg"
              src="/images/dev.gif"
              alt="Frontend Dev"
              layout="intrinsic"
              height={296}
              width={480}
            />
            <h3>UI/UX-DESIGN</h3>
            <p>UI and UX work hand in hand. You only get great UI withe great UX and vice-versa. Take a look at some of my Graphic Design and UI work on my Behance Portfolio.</p>
            <button type="button" className="button"></button>
          </div>
        </div>
      </div>
    </UxUiWrapper>
  )
}

UiUx.propTypes = {

}

export default UiUx
