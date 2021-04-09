import React from 'react'
import PropTypes from 'prop-types'
import SplitImageWrapper from './SplitContent.styled';
import Link from 'next/link';

const SplitContent = ( {content} ) => {
  const {
    headline,
    body,
    link,
    imageOn,
    linkText,
    imageUrl,
  } = content.caseStudy;

  const imageColumn = <div className="imageSplit" style={{ backgroundImage: `url("${imageUrl}")`}}></div>
  const contentColumn = <div className="contentSplit">
  <h2>{headline}</h2>
  <p>{body}</p>

  <Link href={link}>
  <button type="button" className="btn">{linkText}</button>
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
