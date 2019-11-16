import React from "react";

// Import styled components
import Container from "./styled/Container";

import WhitePulse from "../images/pulse-white.svg";

const Values = () => (
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
        title="Global"
        desc="“Global” as Bizjapan puts it is NOT just an “interaction with international students.” It also means crossing over the numerous boundaries — boundaries of countries, fields, age, gender, universities, culture, and so on. Here we assemble, surpassing all those unnecessary boundaries. By getting over them, we co-create and make an impact on the world."
      />
      <Value
        title="Entrepreneurship"
        desc="“Entrepreneurship” as Bizjapan puts it is NOT “the act of setting up a business.” We consider it as a mentality where passion and novelty meets, and it rests in the mind of those who wish to make an impact on the world. Sympathy from others, social significance, sustainable model, recirculation of resources — everything starts from here."
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
