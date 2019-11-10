import React from 'react';
import { Link } from 'gatsby';

const HeaderNavi = props => {
  const naviItems = props.list.map(item => {
    if (item === 'join') {
      return (
        <li key={item} style={{ float: `left`, marginRight: `3em` }}>
          <a
            style={{ color: `black`, textDecoration: `none` }}
            href='https://sites.google.com/bizjapan.org/recruiting-jp/home'
          >
            JOIN
          </a>
        </li>
      );
    }
    return (
      <li key={item} style={{ float: `left`, marginRight: `3em` }}>
        <Link
          to={'/' + item}
          style={{ color: `black`, textDecoration: `none` }}
          activeStyle={{ textDecoration: `underline` }}
        >
          {item.toUpperCase()}
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
        float: `right`,
        fontWeight: `bold`,
        textDecoration: `none`
      }}
    >
      {naviItems}
    </ul>
  );
};

export default HeaderNavi;
