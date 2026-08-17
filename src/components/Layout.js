import React from "react"
import PropTypes from "prop-types"

import DarkMode from "./DarkMode/DarkMode"
import "../assets/scss/main.scss"
import "../assets/js/main.js"

import Cursor from "./Cursor"
import Header from "./Header"

const Layout = ({ children }) => {
  return (
  <>
    <div className="site">
      <Cursor />

        <div className="navbar">
          <DarkMode />
        </div>

        <Header />

        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout