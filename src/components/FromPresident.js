import React from "react";

// Import styled components
import Container from "./styled/Container";
import { FormattedMessage } from "gatsby-plugin-intl";

import Pulse from "../images/pulse.svg";
import president from "../images/president.jpg";

const FromPresident = () => (
  <Container title="From President">
    <Pulse
      style={{
        height: `3em`,
        display: `block`,
        margin: `0 auto 2em`
      }}
    />
    <img src={president} alt="President" style={{ marginBottom: `2em` }} />
    <p style={{ marginBottom: `2em` }}>
      <FormattedMessage id="frompresident.first" />
      <br />
      <br />
      <FormattedMessage id="frompresident.second" />
      <br />
      <br />
      <FormattedMessage id="frompresident.third" />
      <br />
      <br />
      <FormattedMessage id="frompresident.fourth" />
    </p>
    <h2 style={{ textAlign: `right` }}>
      Hitoshi Kitamura
      <br />
      6th Batch President, Bizjapan
    </h2>
  </Container>
);

export default FromPresident;
