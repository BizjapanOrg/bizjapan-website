import React from "react";

// Import styled components
import Container from "./styled/Container";

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
    <img src={president} style={{ marginBottom: `2em` }} />
    <p style={{ marginBottom: `2em` }}>
      It’s always fantastic when someone talks about their “passion.” I’ve felt
      this way numerous times looking at the sparkling eyes of Bizjapan members,
      confident in their “passion.”
      <br />
      <br />
      But underneath that “passion,” there are surely efforts and struggles
      hidden from my eyes. I recently came to realize that everyone has a start
      and is fighting back a bit of fear everyday.
      <br />
      <br />
      Colorful variations of “passion” gather, meet, and blossom here. Even in a
      storm, stamped by strangers, the flowers stand open. This garden never
      fails to offer me comfort, rush, and courage.
      <br />
      <br />
      Under the motto of “Because we love it.” and with a sense of ownership
      towards our society, each one of us strives to open up our paths. To
      continue our role as a platform for entrepreneurs, Bizjapan will keep
      moving forward.
    </p>
    <h2 style={{ textAlign: `right` }}>
      Hitoshi Kitamura
      <br />
      6th Batch President, Bizjapan
    </h2>
  </Container>
);

export default FromPresident;
