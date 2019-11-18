import React from "react";

// Import styled components
import Container from "./styled/Container";
import Button from "./styled/Button";

import Pulse from "../images/pulse.svg";

const Contact = () => (
  <Container title="Contact">
    <Pulse
      style={{
        height: `3em`,
        display: `block`,
        margin: `0 auto 2em`
      }}
    />
    <p style={{ marginBottom: `2em` }}>Paragraph comes in!</p>
    <div style={{ textAlign: "center" }}>
      <Button>Send a message!</Button>
    </div>
  </Container>
);

export default Contact;
