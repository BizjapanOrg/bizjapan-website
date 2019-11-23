import React from "react";
import { Link } from "gatsby-plugin-intl";
import styled from "styled-components";

const HeaderNavi = () => (
  <ul
    style={{
      listStyle: `none`,
      textAlign: `center`,
      margin: `0`,
      float: `right`,
      fontWeight: `bold`,
      textDecoration: `none`
    }}
  >
    <NaviItem key="home">
      <ItemLink to={"/"}>HOME</ItemLink>
    </NaviItem>
    <NaviItem key="project">
      <ItemLink to="/project">PROJECT</ItemLink>
    </NaviItem>
    <NaviItem key="report">
      <ItemLink to="/report">REPORT</ItemLink>
    </NaviItem>
    <NaviItem key="profile">
      <ItemLink to="/profile">PROFILE</ItemLink>
    </NaviItem>
    <NaviItem key="join">
      <a
        style={{ color: `black`, textDecoration: `none` }}
        href="https://sites.google.com/bizjapan.org/recruiting-jp/home"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="See our recruiting portal page."
      >
        JOIN
      </a>
    </NaviItem>
  </ul>
);

// Define styled components.
const NaviItem = styled.li`
  float: left;
  margin-right: 3em;
  font-family: "DIN alternate", "Ropa Sans", sans-serif;
`;

const ItemLink = styled(props => (
  <Link activeStyle={{ textDecoration: `underline` }} {...props} />
))`
  color: black;
  text-decoration: none;
`;

export default HeaderNavi;
