import React from "react";
import { Link } from "gatsby-plugin-intl";

import BlackLogo from "../BlackLogo";
import HeaderNavi from "./HeaderNavi";
import HeaderNaviMobile from "./HeaderNaviMobile";

import Pulse from "../../images/pulse.svg";

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
  }

  mobileOrDesktop() {
    if (typeof window !== `undefined`) {
      var mq = window.matchMedia("(max-width: 720px)");
      if (mq.matches) {
        // Mobile
        return (
          <>
            <button
              onClick={this.handleClick}
              style={{
                width: `50px`,
                height: `30px`,
                padding: `0`,
                margin: `-3.5px 0 0 0`,
                border: `0`,
                float: `right`,
                backgroundColor: `white`
              }}
            >
              <Pulse style={{ height: `100%`, width: `100%` }} />
            </button>

            {this.state.headerNavi ? <HeaderNaviMobile list={naviList} /> : ""}
          </>
        );
      } else {
        // Desktop
        return <HeaderNavi list={naviList} />;
      }
    }
    return <HeaderNavi list={naviList} />;
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
        <Link to="/" style={{ float: `left`, width: `120px` }}>
          <BlackLogo />
        </Link>
        {this.mobileOrDesktop()}
      </header>
    );
  }
}

var naviList = ["home", "project", "report", "profile", "join"];

export default Header;
