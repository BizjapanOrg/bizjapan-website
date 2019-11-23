import React from "react";
import { Link, changeLocale, useIntl } from "gatsby-plugin-intl";
import styled from "styled-components";

import BlackLogo from "../BlackLogo";

const HeaderNaviMobile = () => {
  const intl = useIntl();

  // Loaded project data depending on the locale.
  if (intl.locale === "en") {
    var nextlanguage = "ja";
    var language = "日本語";
  } else {
    nextlanguage = "en";
    language = "English";
  }

  return (
    <div
      style={{
        zIndex: `1000000`,
        position: `fixed`,
        top: `60px`,
        left: `0`,
        width: `100vw`,
        height: `calc(100vh - 60px)`,
        padding: `50px 70px`,
        margin: `0`,
        backgroundColor: `white`,
        opacity: `95%`
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
            aria-label="Check our recruiting portal page."
          >
            JOIN
          </a>
        </NaviItem>
        <NaviItem key="language">
          <span
            style={{ color: `black`, textDecoration: `none` }}
            aria-label="Change the locale."
            onClick={() => changeLocale(nextlanguage)}
          >
            {language}
          </span>
        </NaviItem>
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
