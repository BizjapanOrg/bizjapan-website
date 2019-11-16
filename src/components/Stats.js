import React from "react";
import styled from "styled-components";

// Import styled components
import Container from "./styled/Container";

import Pulse from "../images/pulse.svg";
import graph1 from "../images/stats/graph1.jpg";
import graph2 from "../images/stats/graph2.jpg";
import graph3 from "../images/stats/graph3.jpg";

const Stats = () => (
  <Container title="Analysis of Bizjapan Members">
    <Pulse
      style={{
        height: `3em`,
        display: `block`,
        margin: `0 auto 2em`
      }}
    />
    <div style={{ width: `80%`, minWidth: `260px`, margin: `0 auto` }}>
      <div style={{ marginBottom: `50px` }}>
        <h2 style={{ textAlign: `center` }}>Member Shift</h2>
        <img
          src={graph1}
          style={{
            width: `75%`,
            minWidth: `250px`,
            margin: `0 auto 1em`,
            display: `block`
          }}
        />
        <p>
          Since its establishment in 2011 by 4 original members, Bizjapan has
          developed in these 7 years to as many as 216 members. We hold
          recruitments in Spring and Autumn, where students active in various
          fields join us.
        </p>
      </div>
      <div style={{ marginBottom: `50px` }}>
        <h2 style={{ textAlign: `center` }}>Nationality</h2>
        <img
          src={graph2}
          style={{
            width: `75%`,
            minWidth: `250px`,
            margin: `0 auto 1em`,
            display: `block`
          }}
        />
        <p>
          The ratio of international members to Japanese members is 1:4. Large
          number of the members are multilingual and our weekly gatherings are
          held in English.
        </p>
      </div>
      <div>
        <h2 style={{ textAlign: `center` }}>University</h2>
        <img
          src={graph3}
          style={{
            width: `75%`,
            minWidth: `250px`,
            margin: `0 auto`,
            display: `block`
          }}
        />
        <p>
          Students from various universities gather at Bizjapan, such as the
          University of Tokyo, Keio University, Waseda University, etc. Some
          even come from universities in Kansai area.
        </p>
      </div>
    </div>
  </Container>
);

export default Stats;
