import React from "react"
import SEO from "../components/seo"

// import components
import AboutUs from "../components/AboutUs"
import Values from "../components/Values"
import Platform from "../components/Platform"
import Partners from "../components/Partners"
import Contact from "../components/Contact"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <AboutUs />
    <Values />
    <Platform />
    <Partners />
    <Contact />
  </>
)

export default IndexPage
