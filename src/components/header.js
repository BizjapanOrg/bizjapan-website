// import { Link } from "gatsby"
import React from 'react';

import HeaderLogo from './HeaderLogo';
import HeaderNavi from './HeaderNavi';

const Header = () => (
  <header style={{ height: `70px`, padding: `20px 5%` }}>
    {/* logo */}
    <div style={{ float: `left`, width: `180px` }}>
      <HeaderLogo />
    </div>
    {/* HeaderNavi */}
    <HeaderNavi />
  </header>
);

export default Header;
