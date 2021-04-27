import React from "react";
import PropTypes from "prop-types";
import SkillsWrapper from "./Skills.styled";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import 'react-tabs/style/react-tabs.css';

const Skills = (props) => {
  return (
    <SkillsWrapper>
      <div className="skillsContainer">
      {/* <div className="skillsContainer" style={{ backgroundImage: `url("/images/skills-mapSVG-01.svg")`, backgroundSize: 'cover'}}> */}
        <div className="skillsWrapper">
          <h2 className="skillHeader">Skill Set</h2>
          <p className="skillIntro">
            Here are the programs and languages that I am know:
          </p>
          <Tabs>
            <TabList>
              <Tab className="btn customBtn">Software development</Tab>
              <Tab className="btn customBtn">UI/UX design</Tab>
            </TabList>
            <div className="range">
            <div className="best">Solid</div>
            <div className="better">Good</div>
            <div className="good">Learning</div>
          </div>
            <TabPanel>
              <div className="skills">
                <div className="skill" skillclass="blue">
                  <img src="/images/icons/javascript-v5.jpg" alt="3icon" />
                  <span>Javascript</span>
                </div>
                <div className="skill" skillclass="blue">
                  <img src="/images/icons/react-v5.jpg" alt="icon" />
                  <span>React</span>
                </div>
                <div className="skill" skillclass="blue">
                  <img src="/images/icons/next-v5.jpg" alt="2icon" />
                  <span>Next js</span>
                </div>
                <div className="skill" skillclass="blue">
                  <img src="/images/icons/html-css-v5.jpg" alt="3icon" />
                  <span>HTML/CSS</span>
                </div>
                <div className="skill" skillclass="yellow">
                  <img src="/images/icons/sass-v5.jpg" alt="3icon" />
                  <span>Sass</span>
                </div>
                <div className="skill" skillclass="yellow">
                  <img src="/images/icons/graphql-v5.jpg" alt="3icon" />
                  <span>Graph QL</span>
                </div>
                <div className="skill" skillclass="orange">
                  <img src="/images/icons/graphql-v5.jpg" alt="3icon" />
                  <span>CommerceTools</span>
                </div>
                <div className="skill" skillclass="orange">
                  <img src="/images/icons/apollo-v5.jpg" alt="3icon" />
                  <span>Apollo</span>
                </div>
                <div className="skill" skillclass="orange">
                  <img src="/images/icons/storybook-v5.jpg" alt="3icon" />
                  <span>Storybook</span>
                </div>
                <div className="skill" skillclass="orange">
                  <img src="/images/icons/gsap-v5.jpg" alt="3icon" />
                  <span>Gsap3</span>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="skills">
                <div className="skill" skillclass="blue">
                  <img
                    src="/images/icons/photoshop-v5.jpg"
                    alt="Photo Editing"
                  />
                  <span>Photo Editing</span>
                </div>
                <div className="skill" skillclass="blue">
                  <img
                    src="/images/icons/vector-graphic-v5.jpg"
                    alt="Vector Graphics"
                  />
                  <span>Vector Graphics</span>
                </div>
                <div className="skill" skillclass="blue">
                  <img src="/images/icons/colors-v5.jpg" alt="Colors" />
                  <span>Adobe XD</span>
                </div>
                <div className="skill" skillclass="blue">
                  <img
                    src="/images/icons/graphics-v5.jpg"
                    alt="Graphic Design"
                  />
                  <span>Graphic Design</span>
                </div>
                <div className="skill" skillclass="blue">
                  <img src="/images/icons/typography-v5.jpg" alt="Typography" />
                  <span>Typography</span>
                </div>
                <div className="skill" skillclass="yellow">
                  <img
                    src="/images/icons/illustrator-v5.jpg"
                    alt="Illustration"
                  />
                  <span>User Testing</span>
                </div>

                <div className="skill" skillclass="yellow">
                  <img src="/images/icons/colors-v5.jpg" alt="Colors" />
                  <span>Color Palette</span>
                </div>

                <div className="skill" skillclass="orange">
                  <img src="/images/icons/colors-v5.jpg" alt="Colors" />
                  <span>Figma</span>
                </div>
              </div>
            </TabPanel>
          </Tabs>

        </div>
      </div>
    </SkillsWrapper>
  );
};

Skills.propTypes = {};

export default Skills;
