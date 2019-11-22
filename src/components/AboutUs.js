import React from "react";
import { FormattedMessage } from "gatsby-plugin-intl";

// Import styled components
import Container from "./styled/Container";
import Pulse from "../images/pulse.svg";

const AboutUs = () => {
  return (
    <Container title="About Us">
      <Pulse
        style={{
          height: `3em`,
          display: `block`,
          margin: `0 auto 2em`
        }}
      />
      <p>
        <FormattedMessage id="aboutus.first" />
        <br />
        <br />
        <FormattedMessage id="aboutus.second" />
        <br />
        <br />
        <FormattedMessage id="aboutus.third" />
      </p>
    </Container>
  );
};

export default AboutUs;
