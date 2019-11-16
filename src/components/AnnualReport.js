import React from "react";

// Import styled components
import Container from "./styled/Container";
import Pulse from "../images/pulse.svg";

const AboutUs = () => (
  <Container title="Annual Report in 2018">
    <Pulse
      style={{
        height: `3em`,
        display: `block`,
        margin: `0 auto 2em`
      }}
    />
    <p>
      Bizjapan publishes an annual report to introduce members’ activities and
      event participations, through Project Reports and Partner Introductions.
      Please have a look to have a grasp of our experiences.
    </p>
  </Container>
);

export default AboutUs;
