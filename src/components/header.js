// import { Link } from "gatsby"
import React from 'react';

import HeaderLogo from './HeaderLogo';
import HeaderNavi from './HeaderNavi';

const Header = () => (
  <header
    style={{
      width: `100%`,
      height: `70px`,
      padding: `20px 5%`,
      position: `absolute`,
      background: `white`,
      zIndex: `10000`
    }}
  >
    {/* logo */}
    <div style={{ float: `left`, width: `180px` }}>
      <HeaderLogo />
    </div>
    {/* HeaderNavi */}
    <HeaderNavi list={naviList} />
  </header>
);

var naviList = ['home', 'project', 'report', 'profile', 'join'];

export default Header;
