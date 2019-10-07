
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Pointer from "./Pointer"
import ReactCursorPosition from 'react-cursor-position';
import Header from "./Header"
import '../assets/scss/main.scss'
import '../assets/js/main.js'
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
        <ReactCursorPosition>
          <Pointer onMouseMove={e => this.handleMouseMove(e)} />
        </ReactCursorPosition>
        
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
