import React from 'react'
import PropTypes from 'prop-types'
import SkillsWrapper from './Skills.styled';

const Skills = props => {
  return (
    <SkillsWrapper>
    <div className="skillsContainer">
      <div className="skillsWrapper">
        <h2 className="skillHeader">Skill Set</h2>
        <p className="skillIntro">Here are the languages that I am proficient at and enjoy working with</p>
        <div className="skills">
          <div className="skill">
            <img src="https://via.placeholder.com/30" alt="icon"/>
            <span>Skill name</span>
          </div>
          <div className="skill">
            <img src="https://via.placeholder.com/30" alt="2icon"/>
            <span>2Skill name</span>
          </div>
          <div className="skill">
            <img src="https://via.placeholder.com/30" alt="3icon"/>
            <span>3Skill name</span>
          </div>
        </div>
      </div>
    </div>
  </SkillsWrapper>
  )
}

Skills.propTypes = {

}

export default Skills
