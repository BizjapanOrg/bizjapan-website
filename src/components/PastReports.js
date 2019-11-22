import React from "react";
import { FormattedMessage } from "gatsby-plugin-intl";

// Import styled components
import Container from "./styled/Container";
import Pulse from "../images/pulse.svg";
import TableContents from "./styled/TableContents";

// Import Images.
import report2017 from "../images/report/2017.jpg";
import report2016 from "../images/report/2016.jpg";
import report2015 from "../images/report/2015.jpg";

const PastReports = () => (
  <Container title="Past Reports">
    <Pulse
      style={{
        height: `3em`,
        display: `block`,
        margin: `0 auto 2em`
      }}
    />
    <p style={{ textAlign: `center`, marginBottom: `2em` }}>
      <FormattedMessage id="pastreports" />
    </p>
    <table style={{ width: `100%`, borderSpacing: `0` }}>
      <tbody style={{ display: `table-row-group`, verticalAlign: `middle` }}>
        <TableContents
          img={report2017}
          link="https://drive.google.com/file/d/1amhkSsVRgGh_mF0hQh4eAy2t5qLJj4I_/view"
          body="Annual Report 2017"
          SameSite="None"
        />
        <TableContents
          img={report2016}
          link="https://drive.google.com/file/d/0B4Ox1EpBqvCXdUoxb3hPOGhxc28/view"
          body="Annual Report 2016"
          SameSite="None"
        />
        <TableContents
          img={report2015}
          link="https://drive.google.com/file/d/0B4Ox1EpBqvCXMU00SE84RFEwNTQ/view"
          body="Annual Report 2015"
        />
      </tbody>
    </table>
  </Container>
);

export default PastReports;
