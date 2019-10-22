
import React from "react"
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Menu = (props) => (
    <nav id="menu">
      <div className="main-nav">
        <ul className="items">
          <li><AnchorLink href="#contact" data-text="#3 contact" >#3 contact</AnchorLink></li>
        <li><AnchorLink href="#skills-tool" data-text="#2 skills&nbsp;&&nbsp;tools" >#2 skills&nbsp;&&nbsp;tools</AnchorLink></li>
          <li><AnchorLink href="#about" data-text="#1 about" >#1 about</AnchorLink></li>
        </ul>
      </div>
      
      {/* <div className="lang">
      <Link onClick={props.onToggleMenu} to="/about" data-text="en" >en</Link> / <Link onClick={props.onToggleMenu} to="/about" data-text="jp" >jp</Link>
      </div> */}
    </nav>
  )

export default Menu
