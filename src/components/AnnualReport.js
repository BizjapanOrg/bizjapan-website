import React from "react";

// Import styled components
import Container from "./styled/Container";
import Pulse from "../images/pulse.svg";

import report2018 from "../images/report/2018.jpg";

const AboutUs = () => (
  <Container title="Annual Report in 2018">
    <Pulse
      style={{
        height: `3em`,
        display: `block`,
        margin: `0 auto 2em`
      }}
    />
    <p style={{ marginBottom: `2em` }}>
      Bizjapan publishes an annual report to introduce members’ activities and
      event participations, through Project Reports and Partner Introductions.
      Please have a look to have a grasp of our experiences from the image
      below.
    </p>
    <a
      target="_blank"
      href="https://drive.google.com/file/d/1hQuBPJQtIK6RK50JSSroBUkVjE2cFIZB/view?usp=sharing"
    >
      <img
        src={report2018}
        alt="Annual Report 2018"
        style={{ width: `100%` }}
      />
    </a>
  </Container>
);

export default AboutUs;
