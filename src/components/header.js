// import { Link } from "gatsby"
import React from 'react';

import BlackLogo from './BlackLogo';
import HeaderNavi from './HeaderNavi';
import HeaderNaviMobile from './HeaderNaviMobile';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { headerNavi: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      headerNavi: !prevState.headerNavi
    }));
    console.log('Clicked');
  }

  mobileOrDesktop() {
    var mq = window.matchMedia('(max-width: 720px)');
    if (mq.matches) {
      // Mobile
      return (
        <>
          <a onClick={this.handleClick}>Open</a>

          {this.state.headerNavi ? <HeaderNaviMobile list={naviList} /> : ''}
        </>
      );
    } else {
      // Desktop
      return <HeaderNavi list={naviList} />;
    }
  }

  render() {
    return (
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
        {this.mobileOrDesktop()}
      </header>
    );
  }
}

var naviList = ['home', 'project', 'report', 'profile', 'join'];

export default Header;
