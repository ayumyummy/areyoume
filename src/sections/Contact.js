import React from 'react'

const Contact = (props) => (
    <section id="contact">
        <div className="container">
            <h2 className="section__title-main">
                <span className="numbering">#3</span>contact
            </h2>
            {/* <div className="contact-method">
                <a href="mailto:toietmoi@areyoumee.com" data-text="toietmoi@areyoumee.com"
                className="text-large-email">toietmoi@areyoumee.com</a>
            </div> */}
            <div className="block-indent title">
              <h3>
                    <p className="indent-1"><a href="mailto:toietmoi@areyoumee.com" rel="noopener noreferrer" data-text="toietmoi@areyoumee.com">> toietmoi@areyoumee.com</a></p>
                <p className="indent-1">> instagram</p>
                    <p className="indent-2"><a href="https://www.instagram.com/ayumyummy/" target="_blank" rel="noopener noreferrer" data-text=" @ayumyummy">> @ayumyummy</a></p>
                <p className="indent-1">> twitter</p>
                    <p className="indent-2"><a href="https:////twitter.com/ayumyummy" target="_blank" rel="noopener noreferrer" data-text=" @ayumyummy">> @ayumyummy</a></p>
                <p className="indent-1">> linkedin</p>
                    <p className="indent-2"><a href="https://www.linkedin.com/in/ayumimamiya/" target="_blank" rel="noopener noreferrer" data-text=" @ayumimamiya">> @ayumimamiya</a></p>
              </h3>
            </div>
        </div>
    </section>
)

export default Contact
