import { Link } from "gatsby"
import React from "react"

const Menu = (props) => (
    <nav id="menu">
      <ul className="items">
        <li><Link onClick={props.onToggleMenu} to="/" data-text="Home" >Home</Link></li>
        <li><Link onClick={props.onToggleMenu} to="/about" data-text="About" >About</Link></li>
        <li><Link onClick={props.onToggleMenu} to="/contact" data-text="Contact" >Contact</Link></li>
      </ul>
    </nav>
  )

export default Menu
