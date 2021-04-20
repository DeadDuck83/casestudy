import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import CaseStudiesWrapper from "./CaseStudies.styled";
import dummyData from "./caseStudyData.json";

const CaseStudies = (props) => {
  const [cases, setCases] = React.useState(dummyData);

  const myCases = cases.map((item) => (
    <div className="card" key={item.url}>
      <Link href={`/work/${item.url}`}>
        <a>
        <img
          className="image"
          src={`${item.titleBg}`}
          alt={item.title}
        />
          <div className="cardHeadline"><h3>{item.title}</h3></div>
          <div className="cardBody"><p>{item.titleSub}</p></div>
        </a>
      </Link>
    </div>
  ));


  return (
    <CaseStudiesWrapper>
      <div className="intro">Case Study Intro</div>
      <div className="cardWrapper">{myCases}</div>
    </CaseStudiesWrapper>
  );
};

CaseStudies.propTypes = {};

export default CaseStudies;
