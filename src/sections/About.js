import React from 'react'
import Skill from '../components/Skill';

const SKILLS = [
  { type: "HTML", level: 99 },
  { type: "CSS", level: 98 },
  { type: "JavaScript", level: 87 },
  { type: "jQuery", level: 92 },
  { type: "PHP", level: 70 },
  { type: "wordpress", level: 95 },
  { type: "BootStrap", level: 90 },
  { type: "React.js", level: 39 },
  { type: "Making popcorn", level: 100 },
];
const About = (props) => (
    <section id="about">
      <div className="container">
          <h2 className="section__title-main">
          ABOUT<br/>ME
        </h2>
        <div className="number">
              <h3>02</h3>
              <h4>who are you</h4>
        </div>
        <div className="block__text mb-5">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias a maxime nam ullam, accusamus nemo est delectus voluptas similique eum! Fugit placeat doloremque maxime, quo cum esse quis labore, incidunt, nobis error laborum. Aut laborum dignissimos, ea sequi ipsam tenetur.</p>
        </div>
        <h2 className="section__title-sub">
          tool
        </h2>
        <div className="skill">
            <div className="box__inner">
                <span className="level">98</span>
                <div className="title">Ps</div>
                <div className="titleFull">photoshop</div>
            </div>
            <div className="box__inner">
                <span className="level">90</span>
                <div className="title">Id</div>
                <div className="titleFull">InDesign</div>
            </div>
            <div className="box__inner">
                <span className="level">85</span>
                <div className="title">Ai</div>
                <div className="titleFull">Illustrator</div>
            </div>
            <div className="box__inner">
                <span className="level">85</span>
                <div className="title">Dw</div>
                <div className="titleFull">Dreamweaver</div>
            </div>
        </div>
        <h2 className="section__title-sub">
          skill
        </h2>
      <Skill skills={SKILLS}/>
        <h2 className="section__title">
          other
        </h2>
        <p>
            HTML/CSS - Javascript - PHP - Sass - Wordpress - React - SEO 
        </p>
      </div>
      
          
      
    </section>
)

export default About
