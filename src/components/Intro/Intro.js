import React from "react";
import IntroStyled from "./Intro.styled";

const Intro = ({content}) => {
  console.log(content)
  return (
    <IntroStyled color={content.color}>
      <div className="intro">
      {content.seoh1 ?  <div className="oneLiner">
          <h2 className="burst">{content.headline}</h2>
          <h1>{content.seoh1}</h1>
        </div>: <div className="oneLiner">
          <h2 className="burst">{content.headline}</h2>
        </div>}


        <p>
        {content.body}
        </p>
      </div>
    </IntroStyled>
  );
};

export default Intro;
