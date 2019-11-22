import React from "react";
import { FormattedMessage } from "gatsby-plugin-intl";

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
        <h2 style={{ textAlign: `center` }}>
          <FormattedMessage id="stats.member.title" />
        </h2>
        <img
          src={graph1}
          alt="Demographic"
          style={{
            width: `75%`,
            minWidth: `250px`,
            margin: `0 auto 1em`,
            display: `block`
          }}
        />
        <p>
          <FormattedMessage id="stats.member.desc" />
        </p>
      </div>
      <div style={{ marginBottom: `50px` }}>
        <h2 style={{ textAlign: `center` }}>
          <FormattedMessage id="stats.nationality.title" />
        </h2>
        <img
          src={graph2}
          alt="Nationality"
          style={{
            width: `75%`,
            minWidth: `250px`,
            margin: `0 auto 1em`,
            display: `block`
          }}
        />
        <p>
          <FormattedMessage id="stats.nationality.desc" />
        </p>
      </div>
      <div>
        <h2 style={{ textAlign: `center` }}>
          <FormattedMessage id="stats.university.title" />
        </h2>
        <img
          src={graph3}
          alt="University"
          style={{
            width: `75%`,
            minWidth: `250px`,
            margin: `0 auto`,
            display: `block`
          }}
        />
        <p>
          <FormattedMessage id="stats.university.desc" />
        </p>
      </div>
    </div>
  </Container>
);

export default Stats;
