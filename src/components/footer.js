import React from "react"
import { Link } from "gatsby"

const Footer = () => (
  <footer>
    <p>©2019 NPO Bizjapan</p>

    {/* Footer navi */}
    <ul>
      <li>
        <Link to="/">- HOME</Link>
      </li>
      <li>
        <Link to="/projects">- PROJECT</Link>
      </li>
      {/* <li>
        <a class="fadelink text" href="./profile/">
          -PROFILE
        </a>
      </li>
      <li>
        <a class="fadelink text" href="./report/">
          -REPORT
        </a>
      </li>
      <li>
        <a
          class="fadelink text"
          href="https://sites.google.com/bizjapan.org/recruiting-jp/home"
        >
          -JOIN
        </a>
      </li>
      <li>
        <a href="./">-CONTACT</a>
      </li> */}
    </ul>
  </footer>
)

export default Footer
