import React from 'react';
import { Link } from 'gatsby';

// A list of pages
const FooterNavi = props => {
  const naviItems = props.list.map(item => {
    if (item === 'join') {
      return (
        <li key={item} style={{ width: `33%`, display: `inline-block` }}>
          <a
            style={{ color: `black`, textDecoration: `none` }}
            href='https://sites.google.com/bizjapan.org/recruiting-jp/home'
          >
            - JOIN
          </a>
        </li>
      );
    }
    return (
      <li
        key={item}
        style={{ width: `33%`, display: `inline-block`, marginBottom: `1em` }}
      >
        <Link
          style={{ color: `black`, textDecoration: `none` }}
          to={'/' + item}
          activeStyle={{ textDecoration: `underline` }}
        >
          {'- ' + item.toUpperCase()}
        </Link>
      </li>
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

export default FooterNavi;
