import React from 'react'
import PropTypes from 'prop-types'
import SplitImageWrapper from './SplitContent.styled';
import Link from 'next/link';

const SplitContent = ({ imageOn = 'right' }) => {

  const imageColumn = <div className="imageSplit" style={{ backgroundImage: `url("/images/UX-w.jpeg")`}}></div>
  const contentColumn = <div className="contentSplit">
  <h2>Case Studies</h2>
  <p>Case studies are a great way to let people peak behind the curtain to learn more about projects… because some of the most important steps that are taken in any project are the ones that most people never see or hear about but are the most interesting and educational. Here I provide several examples of UX / UI and Development.</p>

  <Link href="/work">
  <button type="button" className="btn">See all my case studies</button>
  </Link>
  </div>

  let firstColumn;
  let secondColumn;
  if (imageOn === 'left') {
    firstColumn = imageColumn;
    secondColumn = contentColumn;
  } else {
    firstColumn = contentColumn;
    secondColumn = imageColumn;
  }


  return (
    <SplitImageWrapper>
      <div className="splitContainer">
        {firstColumn}
        {secondColumn}
      </div>
    </SplitImageWrapper>
  )
}

SplitContent.propTypes = {

}

export default SplitContent
