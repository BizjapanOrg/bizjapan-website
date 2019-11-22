import React from "react";
import styled from "styled-components";
import { useIntl } from "gatsby-plugin-intl";

// Import styled components
import Container from "./styled/Container";

import Pulse from "../images/pulse.svg";

const CorporateInformation = () => {
  const intl = useIntl();

  return (
    <Container title="Corporate Information">
      <Pulse
        style={{
          height: `3em`,
          display: `block`,
          margin: `0 auto 2em`
        }}
      />
      {/* Table */}
      <table style={{ width: `80%`, margin: `0 auto`, borderSpacing: `0` }}>
        <tbody style={{ display: `table-row-group`, verticalAlign: `middle` }}>
          <InfoTable
            title={intl.formatMessage({ id: "corporateinfo.name.title" })}
            body={intl.formatMessage({ id: "corporateinfo.name.desc" })}
          />
          <InfoTable
            title={intl.formatMessage({ id: "corporateinfo.founder.title" })}
            body={intl.formatMessage({ id: "corporateinfo.founder.desc" })}
          />
          <InfoTable
            title={intl.formatMessage({
              id: "corporateinfo.establishment.title"
            })}
            body={intl.formatMessage({
              id: "corporateinfo.establishment.desc"
            })}
          />
          <InfoTable
            title={intl.formatMessage({
              id: "corporateinfo.office.title"
            })}
            body={intl.formatMessage({
              id: "corporateinfo.office.desc"
            })}
          />
        </tbody>
      </table>
    </Container>
  );
};

const InfoTable = props => (
  <TableRow>
    <TableHead>
      <p>{props.title}</p>
    </TableHead>
    <TableBody>
      <p>{props.body}</p>
    </TableBody>
  </TableRow>
);

const TableRow = styled.tr`
  display: table-row;
  border-color: inherit;
  border-spacing: 0;
`;
const TableHead = styled.th`
  display: table-cell;
  text-align: center;
  border-spacing: 0;
  border-bottom: solid 2px #fb5144;
  padding: 10px 0;
`;
const TableBody = styled.td`
  display: table-cell;
  border-bottom: solid 2px #ddd;
  text-align: center;
  padding: 10px 0;
  border-spacing: 0;
`;

export default CorporateInformation;
