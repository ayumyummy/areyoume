import React from 'react'

import TabAbout from '../components/TabAbout';

const About = (props) => (
    <section id="about">
      <div className="container">
      <h2 className="section__title-main"><span className="numbering">#1</span>
        who a<span className="text-noir">m I?</span>
          </h2>
        <div className="block-indent title">
          <h3>
            <p className="indent-1"><i>noun</i></p>
            <p className="indent-2">1 <strong>Ayumi Mamiya</strong></p>
            <p className="indent-3">a. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, excepturi.</p>
            <p className="indent-3">>.creative.developer</p>
          </h3>
        </div>
        <div className="block-indent title">
          <h3>
            <p className="indent-1"><i>verb</i></p>
            <p className="indent-2">2 <strong>coding</strong></p>
            <p className="indent-3">a. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, excepturi.</p>
            <p className="indent-3">b. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, excepturi</p>
          </h3>
        </div>
        <div className="block-indent title">
          <h3>
            <p className="indent-1"><i>noun</i></p>
            <p className="indent-2">3 <strong>popcorn</strong></p>
            <p className="indent-3">a. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, excepturi.</p>
            <p className="indent-3">b. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, excepturi</p>
          </h3>
        </div>
       
        <TabAbout/>
        
      
      </div>
      
          
      
    </section>
)

export default About
