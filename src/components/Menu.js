
import React from "react"
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Menu = (props) => (
    <nav id="menu">
      <div className="main-nav">
        <ul className="items">
          <li><AnchorLink onClick={props.onToggleMenu} to="/contact" data-text="#3 contact" >#3 contact</AnchorLink></li>
          <li><AnchorLink onClick={props.onToggleMenu} to="/" data-text="#2 skills & tools" >#2 skills & tools</AnchorLink></li>
          <li><AnchorLink onClick={props.onToggleMenu} to="/about" data-text="#1 about" >#1 about</AnchorLink></li>
        </ul>
      </div>
      
      {/* <div className="lang">
      <Link onClick={props.onToggleMenu} to="/about" data-text="en" >en</Link> / <Link onClick={props.onToggleMenu} to="/about" data-text="jp" >jp</Link>
      </div> */}
    </nav>
  )

export default Menu
