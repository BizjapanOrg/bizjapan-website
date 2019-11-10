import React from 'react';

const HeaderNavi = () => (
  // Header Navi
  <ul
    style={{
      listStyle: `none`,
      textAlign: `center`,
      margin: `0`,
      float: `right`,
      fontWeight: `bold`
    }}
  >
    <li style={{ float: `left`, marginRight: `3em` }}>Home</li>
    <li style={{ float: `left`, marginRight: `3em` }}>Projects</li>
    <li style={{ float: `left`, marginRight: `3em` }}>Profile</li>
    <li style={{ float: `left`, marginRight: `3em` }}>Report</li>
  </ul>
);

export default HeaderNavi;
