import React from 'react'

const About = (props) => (
    <section id="contact">
        <div className="inner">
            <section>
                <form method="post" action="#">
                    <div className="field half first">
                        <label htmlFor="name">Name</label>
                        {/* <input type="text" name="name" id="name" /> */}
                    </div>
                    
                </form>
            </section>
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3>Email</h3>
                        <a href="#">toietmoi@areyoumee.com</a>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-phone"></span>
                        <h3>Phone</h3>
                        <span>(000) 000-0000 x12387</span>
                    </div>
                </section>
               
            </section>
        </div>
    </section>
)

export default About
