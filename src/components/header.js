// import { Link } from "gatsby"
import React from 'react';

import BlackLogo from './BlackLogo';
import HeaderNavi from './HeaderNavi';
import HeaderNaviMobile from './HeaderNaviMobile';

const Header = () => (
  <header
    style={{
      position: `fixed`,
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
    // Mobile
    return <HeaderNaviMobile list={naviList} />;
  } else {
    // Desktop
    return <HeaderNavi list={naviList} />;
  }
};

export default Header;
