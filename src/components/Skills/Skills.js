import React from 'react'
import PropTypes from 'prop-types'
import SkillsWrapper from './Skills.styled';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

const Skills = props => {
  return (
    <SkillsWrapper>
      <div className="skillsContainer">
        <div className="skillsWrapper">
          <h2 className="skillHeader">Skill Set</h2>
          <p className="skillIntro">Here are the programs and languages that I am know:</p>
          <Tabs>
          <TabList>
            <Tab className="btn customBtn" type="button">UI/UX design</Tab>
            <Tab className="btn customBtn" type="button">Software development</Tab>
          </TabList>

          <TabPanel>
            <div className="skills">
              <div className="skill">
                <img src="https://via.placeholder.com/30" alt="icon" />
                <span>Photo Editing</span>
              </div>
              <div className="skill">
                <img src="https://via.placeholder.com/30" alt="2icon" />
                <span>Vector Graphics</span>
              </div>
              <div className="skill">
                <img src="https://via.placeholder.com/30" alt="3icon" />
                <span>Typography</span>
              </div>
              <div className="skill">
                <img src="https://via.placeholder.com/30" alt="3icon" />
                <span>Illustration</span>
              </div>
              <div className="skill">
                <img src="https://via.placeholder.com/30" alt="3icon" />
                <span>Graphic Design</span>
              </div>
              <div className="skill">
                <img src="https://via.placeholder.com/30" alt="3icon" />
                <span>Color Palette</span>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="skills">
            <div className="skill">
                <img src="https://via.placeholder.com/30" alt="3icon" />
                <span>Javascript</span>
              </div>
              <div className="skill">
                <img src="https://via.placeholder.com/30" alt="icon" />
                <span>React</span>
              </div>
              <div className="skill">
                <img src="https://via.placeholder.com/30" alt="2icon" />
                <span>Next js</span>
              </div>
              <div className="skill">
                <img src="https://via.placeholder.com/30" alt="3icon" />
                <span>HTML/CSS</span>
              </div>
              <div className="skill">
                <img src="https://via.placeholder.com/30" alt="3icon" />
                <span>Sass</span>
              </div>
              <div className="skill">
                <img src="https://via.placeholder.com/30" alt="3icon" />
                <span>Graph QL</span>
              </div>
              <div className="skill">
                <img src="https://via.placeholder.com/30" alt="3icon" />
                <span>Apollo</span>
              </div>
              <div className="skill">
                <img src="https://via.placeholder.com/30" alt="3icon" />
                <span>Storybook</span>
              </div>
              <div className="skill">
                <img src="https://via.placeholder.com/30" alt="3icon" />
                <span>Gsap</span>
              </div>
            </div>
          </TabPanel>
        </Tabs>
        </div>

      </div>
    </SkillsWrapper>
  )
}

Skills.propTypes = {

}

export default Skills
