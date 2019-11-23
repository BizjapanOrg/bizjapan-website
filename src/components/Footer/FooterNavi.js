import React from "react";
import { Link } from "gatsby-plugin-intl";
import styled from "styled-components";

// A list of pages
const FooterNavi = props => {
  const naviItems = props.list.map(item => {
    if (item === "join") {
      return (
        <NaviItem key={item}>
          <a
            style={{ color: `black`, textDecoration: `none` }}
            href="https://sites.google.com/bizjapan.org/recruiting-jp/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            - JOIN
          </a>
        </NaviItem>
      );
    } else if (item === "home") {
      return (
        <NaviItem key={item}>
          <ItemLink to={"/"}>{"- " + item.toUpperCase()}</ItemLink>
        </NaviItem>
      );
    }
    return (
      <NaviItem key={item}>
        <ItemLink to={"/" + item}>{"- " + item.toUpperCase()}</ItemLink>
      </NaviItem>
    );
  });
  return (
    <ul
      style={{
        listStyle: `none`,
        textAlign: `center`,
        margin: `0`,
        marginBottom: `1em`
      }}
    >
      {naviItems}
    </ul>
  );
};

// Define styled components.
const NaviItem = styled.li`
  width: 33%;
  display: inline-block;
  margin-bottom: 1em;
`;

const ItemLink = styled(props => <Link {...props} />)`
  color: black;
  text-decoration: none;
`;

export default FooterNavi;
