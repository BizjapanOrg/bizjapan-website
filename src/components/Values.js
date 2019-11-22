import React from "react";
import { useIntl } from "gatsby-plugin-intl";

// Import styled components
import Container from "./styled/Container";

import WhitePulse from "../images/pulse-white.svg";

const Values = () => {
  const intl = useIntl();

  return (
    <div style={{ position: `relative` }}>
      <Container title="Our Values" inputColor="white">
        <WhitePulse
          style={{
            height: `3em`,
            display: `block`,
            margin: `0 auto 2em`
          }}
        />
        <Value
          title={intl.formatMessage({ id: "values.firstvalue.title" })}
          desc={intl.formatMessage({ id: "values.firstvalue.desc" })}
        />
        <Value
          title={intl.formatMessage({ id: "values.secondvalue.title" })}
          desc={intl.formatMessage({ id: "values.secondvalue.desc" })}
        />
      </Container>
      <div
        style={{
          position: `absolute`,
          top: `0`,
          bottom: `0`,
          width: `100%`,
          height: `100%`,
          background: `linear-gradient(90deg, hsl(277, 80%, 20%), hsl(349, 95%, 20%))`,
          zIndex: `-1000`
        }}
      ></div>
    </div>
  );
};

const Value = props => {
  return (
    <div style={{ marginBottom: `2em`, color: `white` }}>
      {/* Title */}
      <h2>{props.title}</h2>
      {/* Exp */}
      <p>{props.desc}</p>
    </div>
  );
};

export default Values;
