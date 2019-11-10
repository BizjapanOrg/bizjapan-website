import React from 'react';

// Import components.
import FooterNavi from './FooterNavi';
import FooterSocialMedia from './FooterSocialMedia';
import BlackLogo from './BlackLogo';

const Footer = () => {
  return (
    <footer
      style={{
        padding: `5em 0`,
        backgroundColor: `#f2f2f2`
      }}
    >
      <div
        style={{
          position: `static`,
          boxSizing: `border-box`,
          width: `65%`,
          minWidth: `260px`,
          margin: `0 auto`
        }}
      >
        <div style={{ maxWidth: `600px`, margin: `0 auto` }}>
          <p style={{ textAlign: `center`, marginBottom: `2em` }}>
            ©2019 NPO Bizjapan
          </p>
          <FooterNavi list={naviList} />
          <FooterSocialMedia />
          <div style={{ width: `10em`, margin: `0 auto` }}>
            <BlackLogo />
          </div>
        </div>
      </div>
    </footer>
  );
};

var naviList = ['home', 'project', 'report', 'profile', 'join', 'contact'];

export default Footer;
