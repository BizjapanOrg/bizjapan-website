import React from "react";

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
        In Bizjapan, members engage with their interests in the form of
        “projects.”
        <br />
        <br />
        “Projects” are done in various ways. Sometimes it can be hosting a
        workshop aimed towards people outside the community or an event
        co-hosted with companies. On the other hand it can be a study tour
        involving many associations or providing workshops exclusively for our
        members.
        <br />
        <br />
        The driving force of initiating projects is not a simple “what to do”
        but rather an intensive process of thinking “what kind of society is
        ideal for us to live in”. Each project focuses on creating and carrying
        out their plans to realize it.
      </p>
    </div>
  </Container>
);

export default WhatIsProject;
