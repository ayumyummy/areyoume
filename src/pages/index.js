import React from "react"
import { Link } from "gatsby"
import Helmet from 'react-helmet'
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Landing from '../sections/Landing';
import About from '../sections/About';
import Contact from '../sections/Contact';
import TagLine from '../components/Tag';
import Footer from '../components/Footer';
// import DrawingLine from "../components/Drawing"
const IndexPage = () => (
  
  <Layout>
    <Helmet
        title="are you me ?"
        meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
        ]}
    >
    </Helmet>
    <SEO title="Home" />
    {/* <DrawingLine /> */}
    <Landing />
    <TagLine/>
    <About />
    <TagLine />
    <Contact />
    <TagLine />
    <Footer />
  </Layout>
)

export default IndexPage;
