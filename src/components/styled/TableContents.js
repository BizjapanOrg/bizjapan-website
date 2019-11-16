import React from "react";
import styled from "styled-components";

const TableContents = props => (
  <TableRow>
    <TableHead>
      <img
        style={{ height: `50px`, borderSpacing: `0` }}
        src={props.img}
        alt={props.body}
      />
    </TableHead>
    <TableBody>
      <a
        href={props.link}
        style={{
          width: `100%`,
          lineHeight: `26px`,
          margin: `auto`
        }}
        target="_blank"
      >
        {props.body}
      </a>
    </TableBody>
  </TableRow>
);

const TableRow = styled.tr`
  display: table-row;
  border-color: inherit;
  border-spacing: 0;
`;

// Define style of ProjectCard
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

export default TableContents;
