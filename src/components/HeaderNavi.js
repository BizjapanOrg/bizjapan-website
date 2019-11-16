import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const HeaderNavi = props => {
  const naviItems = props.list.map(item => {
    if (item === "join") {
      return (
        <NaviItem key={item}>
          <a
            style={{ color: `black`, textDecoration: `none` }}
            href="https://sites.google.com/bizjapan.org/recruiting-jp/home"
            target="_blank"
          >
            JOIN
          </a>
        </NaviItem>
      );
    } else if (item === "home") {
      return (
        <NaviItem key={item}>
          <ItemLink to={"/"}>{item.toUpperCase()}</ItemLink>
        </NaviItem>
      );
    }
    return (
      <NaviItem key={item}>
        <ItemLink to={"/" + item}>{item.toUpperCase()}</ItemLink>
      </NaviItem>
    );
  });
  return (
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
      {naviItems}
    </ul>
  );
};

// Define styled components.
const NaviItem = styled.li`
  float: left;
  margin-right: 3em;
`;

const ItemLink = styled(props => (
  <Link activeStyle={{ textDecoration: `underline` }} {...props} />
))`
  color: black;
  text-decoration: none;
`;

export default HeaderNavi;
