import React from "react";
import { FormattedMessage } from "gatsby-plugin-intl";

// Import styled components
import Container from "./styled/Container";
import Button from "./styled/Button";

import Pulse from "../images/pulse.svg";

const Contact = () => {
  return (
    <Container title="Contact">
      <Pulse
        style={{
          height: `3em`,
          display: `block`,
          margin: `0 auto 2em`
        }}
      />
      <p style={{ marginBottom: `2em` }}>
        <FormattedMessage id="contact" />
      </p>
      <div style={{ textAlign: "center" }}>
        <Button aria-label="Access to the contact form">
          <a
            style={{ textDecoration: `none`, color: `#707070` }}
            href="https://docs.google.com/forms/d/e/1FAIpQLScXUlgjMW1PbzsaeOjXm9OfhKS480FOb7b4SRBTvQzlYPIOjQ/viewform?usp=sf_link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link up with the contact form"
          >
            Send a message!
          </a>
        </Button>
      </div>
    </Container>
  );
};

export default Contact;
