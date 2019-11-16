import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import BlackLogo from "./BlackLogo";

const HeaderNaviMobile = props => {
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
    <div
      style={{
        zIndex: `1000000`,
        position: `fixed`,
        top: `60px`,
        left: `0`,
        width: `100vw`,
        height: `calc(100vh - 60px)`,
        padding: `70px`,
        margin: `0`,
        backgroundColor: `white`,
        opacity: `90%`
      }}
    >
      <ul
        style={{
          display: `flex`,
          flexDirection: `column`,
          margin: `0`,
          fontWeight: `bold`,
          listStyle: `none`,
          textDecoration: `none`,
          textAlign: `right`
        }}
      >
        {naviItems}
      </ul>
      <div
        style={{
          position: `absolute`,
          bottom: `70px`,
          width: `calc(100% - 140px)`
        }}
      >
        <h2 style={{ textAlign: `center`, marginBottom: `35px` }}>
          Global x Entrepreneurship
        </h2>
        <BlackLogo />
      </div>
    </div>
  );
};

// Define styled components.
const NaviItem = styled.li`
  /* The same as H1 tag. */
  margin: 0;
  padding: 0;
  margin-bottom: 1.4em;
  color: black;
  opacity: initial;
  font-family: "DIN alternate", "Ropa Sans", sans-serif;
  font-weight: bold;
  text-rendering: optimizeLegibility;
  font-size: 2.25rem;
  line-height: 1.1;
`;

const ItemLink = styled(props => (
  <Link activeStyle={{ textDecoration: `underline` }} {...props} />
))`
  color: black;
  text-decoration: none;
`;

export default HeaderNaviMobile;
