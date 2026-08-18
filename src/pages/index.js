import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Landing from "../sections/Landing"
import About from "../sections/About"
import SkillsTools from "../sections/SkillsTools"
import Contact from "../sections/Contact"
import TagLine from "../components/Tag"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Are You Me?" />

    <Landing />
    <TagLine />
    <About />
    <TagLine />
    <SkillsTools />
    <TagLine />
    <Contact />
    <TagLine />
    <Footer />
  </Layout>
)

export default IndexPage