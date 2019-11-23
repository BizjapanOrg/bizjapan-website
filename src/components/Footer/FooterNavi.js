import React from "react";
import { Link } from "gatsby-plugin-intl";
import styled from "styled-components";

// A list of pages
const FooterNavi = () => (
  <ul
    style={{
      listStyle: `none`,
      textAlign: `center`,
      margin: `0`,
      marginBottom: `1em`
    }}
  >
    <NaviItem key="home">
      <ItemLink to={"/"}>- HOME</ItemLink>
    </NaviItem>
    <NaviItem key="project">
      <ItemLink to="/project">- PROJECT</ItemLink>
    </NaviItem>
    <NaviItem key="report">
      <ItemLink to="/report">- REPORT</ItemLink>
    </NaviItem>
    <NaviItem key="profile">
      <ItemLink to="/profile">- PROFILE</ItemLink>
    </NaviItem>
    <NaviItem key="join">
      <a
        style={{ color: `rgba(0, 0, 0, 0.65)`, textDecoration: `none` }}
        href="https://sites.google.com/bizjapan.org/recruiting-jp/home"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="See the recruiting portal page of Bizjapan."
      >
        - JOIN
      </a>
    </NaviItem>
    <NaviItem key="contact">
      <a
        style={{ color: `rgba(0, 0, 0, 0.65)`, textDecoration: `none` }}
        href="https://docs.google.com/forms/d/e/1FAIpQLScXUlgjMW1PbzsaeOjXm9OfhKS480FOb7b4SRBTvQzlYPIOjQ/viewform?usp=sf_link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Access to the contact form"
      >
        - CONTACT
      </a>
    </NaviItem>
  </ul>
);

// Define styled components.
const NaviItem = styled.li`
  width: 33%;
  font-family: "DIN alternate", "Ropa Sans", sans-serif;
  display: inline-block;
  margin-bottom: 1em;
`;

const ItemLink = styled(props => <Link {...props} />)`
  text-decoration: none;
  color: rgba(0, 0, 0, 0.65);
`;

export default FooterNavi;
