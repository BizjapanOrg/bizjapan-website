import React from "react";
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";

// Import styled components
import Container from "./styled/Container";
import Pulse from "../images/pulse.svg";

import report2019 from "../images/report/2019.jpg";

const AboutUs = ({ intl }) => (
  <Container title="Annual Report in 2019">
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
      href={intl.formatMessage({ id: "annualreport.2019" })}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="See the annuanl report in 2019."
    >
      <img
        src={report2019}
        alt="Annual Report 2019"
        style={{ width: `100%` }}
      />
    </a>
  </Container>
);

export default injectIntl(AboutUs);
