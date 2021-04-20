import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import { useRouter } from "next/router";
import CaseStudyWrapper from "./CaseStudy.styled";
import dummyData from "../caseStudyData.json";

const CaseStudy = ({ project }) => {
  console.log(project);
  // loop over roles and challenges

  return (
    <CaseStudyWrapper>
      <div
        className="banner section"
        style={{ backgroundImage: `url("${project.titleBg}")` }}
      >
        <h1>{project.title}</h1>
        <p>{project.titleSub || "hello"}</p>
      </div>
      <div className="request section">
        <h2>The Request:</h2>
        <div className="intro">Request intro {project.request.body}</div>
        <div className="list">
          My role. Loop over for roles {project.request.myRole[1]}
        </div>

        <img
          className="image"
          src={`${project.request.img}`}
          alt={project.title}
        />
      </div>
      <div className="challenges section">
        <h2>The Challenges:</h2>
        <div className="intro">{project.challenges.body}</div>
        <div className="list">{project.challenges.challenges[1]}</div>
        <img
          className="image"
          src={`${project.challenges.img}`}
          alt={project.title}
        />
      </div>
      <div className="approach section">
        <h2>The Approach:</h2>
        <div className="intro">{project.approach.body}</div>
        <img
          className="image"
          src={`${project.approach.img}`}
          alt={project.title}
        />
      </div>
      <div className="solution section">
        <h2>The Solution:</h2>
        <div className="intro">{project.solution.body}</div>
        <img
          className="image"
          src={`${project.solution.img}`}
          alt={project.title}
        />
      </div>
      <div className="learnings section">
        <h2>Learnings:</h2>
        <div className="intro">{project.learning.body}</div>
      </div>
    </CaseStudyWrapper>
  );
};

CaseStudy.propTypes = {};

export default CaseStudy;
