import React from 'react'

import TabItems from '../components/Tabs';

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
            <p className="indent-3">a. Growing up the in the city of Tokyo, surrounded by technology, it was part of my culture and my identity to love coding.</p>
            <p className="indent-3">b. I have lived on 3 continents and learned many languages, which have all influenced my drive and ambition professionally and personally.</p>
          <p className="indent-3">c. I work hard, but dream bigger. I want to inspire and impress a whole world of people, including my friends &#10084;</p>
          </h3>
        </div>
        <div className="block-indent title">
          <h3>
            <p className="indent-1"><i>verb</i></p>
            <p className="indent-2">2 <strong>coding</strong></p>
            <p className="indent-3">a. I love animation and the ability to bring a website/application/whatever to life.</p>
            <p className="indent-3">b. I spend my valuable time learning new techniques and implementing with technology, as my work enhances.</p>
          </h3>
        </div>
        <div className="block-indent title">
          <h3>
            <p className="indent-1"><i>noun</i></p>
            <p className="indent-2">3 <strong>popcorn</strong></p>
            <p className="indent-3">a. I connect with popcorn on a molecular level. We are both salty (80%) and sweet (20%).</p>
            <p className="indent-3">b. I also make the best popcorn in the world, so my mom tells me.</p>
          </h3>
        </div>
       
      <TabItems/>
        
      
      </div>
      
          
      
    </section>
)

export default About
