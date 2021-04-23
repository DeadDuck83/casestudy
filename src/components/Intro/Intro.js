import React from "react";
import IntroStyled from "./Intro.styled";

const Intro = () => {
  return (
    <IntroStyled>
      <div className="intro">
        <div className="oneLiner">
          <h2 className="burst">Hello, I am </h2>
          <h1>Derek Moore.</h1>
        </div>

        <p>
          I'm a front-end web developer and UX designer from Avalon, California.
          I enjoy animation and complex user interface problems. I have 13 years
          in Graphic/UX design and now focus my energy on front-end web
          development.
        </p>
      </div>
    </IntroStyled>
  );
};

export default Intro;
