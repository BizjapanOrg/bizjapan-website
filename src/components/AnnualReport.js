import React from "react";
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";

// Import styled components
import Container from "./styled/Container";
import Pulse from "../images/pulse.svg";

import report2018 from "../images/report/2018.jpg";

const AboutUs = ({ intl }) => (
  <Container title="Annual Report in 2018">
    <Pulse
      style={{
        height: `3em`,
        display: `block`,
        margin: `0 auto 2em`
      }}
    />
    <p style={{ marginBottom: `2em` }}>
      <FormattedMessage id="annualreport.desc" />
    </p>
    <a
      href={intl.formatMessage({ id: "annualreport.2018" })}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="See the annuanl report in 2018."
    >
      <img
        src={report2018}
        alt="Annual Report 2018"
        style={{ width: `100%` }}
      />
    </a>
  </Container>
);

export default injectIntl(AboutUs);
