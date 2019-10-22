
import PropTypes from "prop-types"
import React from "react"
import Menu from "./Menu"


const Header = (props) => (
  <header id="header" className="">
          <Menu />
         
      </header>
      
    );
 


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
