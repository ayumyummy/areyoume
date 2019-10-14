import { Link } from "gatsby"
import React from "react"

const Menu = (props) => (
    <nav id="menu">
      <ul className="items">
      <li><Link onClick={props.onToggleMenu} to="/contact" data-text="#3 contact" >#3 contact</Link></li>
      <li><Link onClick={props.onToggleMenu} to="/" data-text="#2 skills & tools" >#2 skills & tools</Link></li>
      <li><Link onClick={props.onToggleMenu} to="/about" data-text="#1 about" >#1 about</Link></li>
      </ul>
      <div className="lang">
      <Link onClick={props.onToggleMenu} to="/about" data-text="en" >en</Link> / <Link onClick={props.onToggleMenu} to="/about" data-text="jp" >jp</Link>
      </div>
    </nav>
  )

export default Menu
