import React from "react";
import styled from "styled-components";
import {
  useIntl,
  Link,
  changeLocale,
  FormattedMessage
} from "gatsby-plugin-intl";

const HeaderNavi = () => {
  const intl = useIntl();

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
          href={intl.formatMessage({ id: "header.joinlink" })}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="See our recruiting portal page."
        >
          JOIN
        </a>
      </NaviItem>
      <NaviItem key="language">
        <span
          style={{ color: `black`, textDecoration: `none`, cursor: `pointer` }}
          aria-label="Change the locale."
          onClick={() =>
            changeLocale(intl.formatMessage({ id: "header.nextlanguage" }))
          }
        >
          <FormattedMessage id="header.language" />
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
