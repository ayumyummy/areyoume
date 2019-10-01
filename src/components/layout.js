
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import '../assets/scss/main.scss'

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
