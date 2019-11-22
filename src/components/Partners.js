import React from "react";
import { FormattedMessage } from "gatsby-plugin-intl";

// Import styled components
import Container from "./styled/Container";
import PartnerCards from "./PartnerCards";

import Pulse from "../images/pulse.svg";

const Partners = () => (
  <Container title="Partners">
    <Pulse
      style={{
        height: `3em`,
        display: `block`,
        margin: `0 auto 2em`
      }}
    />
    <p style={{ textAlign: `center`, marginBottom: `2em` }}>
      <FormattedMessage id="partners" />
    </p>
    <PartnerCards />
  </Container>
);

export default Partners;
