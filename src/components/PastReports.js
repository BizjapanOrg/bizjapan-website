import React from "react";
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl";

// Import styled components
import Container from "./styled/Container";
import Pulse from "../images/pulse.svg";
import TableContents from "./styled/TableContents";

// Import Images.
import report2017 from "../images/report/2017.jpg";
import report2016 from "../images/report/2016.jpg";
import report2015 from "../images/report/2015.jpg";

const PastReports = ({ intl }) => (
  <Container title="Past Reports">
    <Pulse
      style={{
        height: `3em`,
        display: `block`,
        margin: `0 auto 2em`
      }}
    />
    <p style={{ textAlign: `center`, marginBottom: `2em` }}>
      <FormattedMessage id="annualreport.past_desc" />
    </p>
    <table style={{ width: `100%`, borderSpacing: `0` }}>
      <tbody style={{ display: `table-row-group`, verticalAlign: `middle` }}>
        <TableContents
          img={report2018}
          link={intl.formatMessage({ id: "annualreport.2018" })}
          body="Annual Report 2018"
          SameSite="None"
        />
        <TableContents
          img={report2017}
          link={intl.formatMessage({ id: "annualreport.2017" })}
          body="Annual Report 2017"
          SameSite="None"
        />
        <TableContents
          img={report2016}
          link={intl.formatMessage({ id: "annualreport.2016" })}
          body="Annual Report 2016"
          SameSite="None"
        />
        <TableContents
          img={report2015}
          link={intl.formatMessage({ id: "annualreport.2015" })}
          body="Annual Report 2015"
          SameSite="None"
        />
      </tbody>
    </table>
  </Container>
);

export default injectIntl(PastReports);
