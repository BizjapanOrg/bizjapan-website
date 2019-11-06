import React from "react"

// Import styled components.
import Container from "./styled/Container"

// Import components.
import FooterNavi from "./FooterNavi"
import FooterSocialMedia from "./FooterSocialMedia"

const Footer = () => {
  return (
    <footer>
      <Container>
        <div style={{ maxWidth: `600px`, margin: `0 auto` }}>
          <p style={{ textAlign: `center` }}>©2019 NPO Bizjapan</p>
          <FooterNavi list={naviList} />
          <FooterSocialMedia />
        </div>
      </Container>
    </footer>
  )
}

var naviList = ["home", "project", "profile", "report", "join", "contact"]

export default Footer
