import React from "react"
import SEO from "../components/seo"

// import components
import AboutUs from "../components/AboutUs"
import Values from "../components/Values"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <AboutUs />
    <Values />
  </>
)

export default IndexPage
