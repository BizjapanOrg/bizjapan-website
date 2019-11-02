import React from "react"
import { Link } from "gatsby"

const Footer = () => (
  <footer>
    <p>©2019 NPO Bizjapan</p>
    <FooterNavi />
  </footer>
)

const FooterNavi = () => (
  <ul>
    <li>
      <Link to="/">- HOME</Link>
    </li>
    <li>
      <Link to="/profile">- PROFILE</Link>
    </li>
    <li>
      <a href="https://sites.google.com/bizjapan.org/recruiting-jp/home">
        - JOIN
      </a>
    </li>
    <li>
      <Link to="/project">- PROJECT</Link>
    </li>
    <li>
      <Link to="/report">- REPORT</Link>
    </li>
    <li>
      <Link to="/">- CONTACT</Link>
    </li>
  </ul>
)

export default Footer
