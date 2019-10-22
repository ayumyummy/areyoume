
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
// import Pointer from "./Pointer"
import DarkMode from './DarkMode/DarkMode';
import '../assets/scss/main.scss'
import '../assets/js/main.js'

import Cursor from "./Cursor"
import Header from "./Header"
// import Header from "./Effect"
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <div>
        <Cursor/>
        <div className="navbar">
          <DarkMode />
        </div>
        <Header/>

        <main>{children}</main>
      </div>
    </> 
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
