// import { Link } from "gatsby"
import React from 'react';

import BlackLogo from './BlackLogo';
import HeaderNavi from './HeaderNavi';

const Header = () => (
  <header
    style={{
      width: `100%`,
      height: `60px`,
      padding: `20px 5%`,
      background: `white`,
      zIndex: `10000`
    }}
  >
    {/* logo */}
    <div style={{ float: `left`, width: `120px` }}>
      <BlackLogo />
    </div>
    {/* HeaderNavi */}
    {/* <HeaderNavi list={naviList} /> */}
    {/* New Codes here */}
    {mobileOrDesktop()}
  </header>
);

var naviList = ['home', 'project', 'report', 'profile', 'join'];

const mobileOrDesktop = () => {
  var mq = window.matchMedia('(max-width: 720px)');
  if (mq.matches) {
    return;
  } else {
    return <HeaderNavi list={naviList} />;
  }
};

export default Header;
