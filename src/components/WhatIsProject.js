import React from "react";
import { FormattedMessage } from "gatsby-plugin-intl";

// Import styled components
import Container from "./styled/Container";
import Pulse from "../images/pulse.svg";

const WhatIsProject = () => (
  <Container title="What is Project?">
    <Pulse
      style={{
        height: `3em`,
        display: `block`,
        margin: `0 auto 2em`
      }}
    />
    <div>
      <p>
        <FormattedMessage id="whatisproject.first" />
        <br />
        <br />

        <FormattedMessage id="whatisproject.second" />
        <br />
        <br />

        <FormattedMessage id="whatisproject.third" />
      </p>
    </div>
  </Container>
);

export default WhatIsProject;
