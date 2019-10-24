import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"

// Import styled components
import Container from "../components/styled/Container"
import Button from "../components/styled/Button"
import Title from "../components/styled/Title"

const IndexPage = () => (
  <Container>
    <SEO title="Home" />
    <Title>Test Title</Title>
    <p>First Paragraph. Welcome to your new Gatsby site.</p>
    <p>Second Paragraph. Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <Button>Test</Button>
  </Container>
)

export default IndexPage
