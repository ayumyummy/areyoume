
import PropTypes from "prop-types"
import React from "react"
import Menu from "./Menu"
const Header = ({ siteTitle }) => (
  <header id="header" className="">
      <Menu />
      <h1>are you me?</h1>
    <h2>> I am.<br />>.web.developer<br />>.web.designer</h2>
  </header>
    
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
