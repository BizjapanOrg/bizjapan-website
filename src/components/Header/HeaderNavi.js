import React from "react";
import { useIntl, Link, changeLocale } from "gatsby-plugin-intl";
import styled from "styled-components";

const HeaderNavi = () => {
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
    <ul
      style={{
        listStyle: `none`,
        textAlign: `center`,
        margin: `3px 0 0 0`,
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
  );
};

// Define styled components.
const NaviItem = styled.li`
  float: left;
  margin-left: 2.5em;
  font-family: "DIN alternate", "Ropa Sans", sans-serif;
  line-height: 19px;
`;

const ItemLink = styled(props => (
  <Link activeStyle={{ textDecoration: `underline` }} {...props} />
))`
  color: black;
  text-decoration: none;
`;

export default HeaderNavi;
