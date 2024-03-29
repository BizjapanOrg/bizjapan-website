import React from "react";

// Import components.
import FooterNavi from "./FooterNavi";
import FooterSocialMedia from "./FooterSocialMedia";
import BlackLogo from "../BlackLogo";

import Container from "../styled/Container";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: `#f2f2f2`
      }}
    >
      <Container>
        <div style={{ maxWidth: `600px`, margin: `0 auto` }}>
          <p
            style={{
              textAlign: `center`,
              marginBottom: `2em`,
              color: `rgba(0, 0, 0, 0.65)`,
              fontFamily: `"DIN alternate", "Ropa Sans", sans-serif`
            }}
          >
            ©2022 NPO Bizjapan
          </p>
          <FooterNavi />
          <FooterSocialMedia />
          <div style={{ width: `10em`, margin: `0 auto` }}>
            <BlackLogo />
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
