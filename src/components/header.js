// import { Link } from "gatsby"
import React from "react"

import HeaderLogo from "./HeaderLogo"
import HeaderNavi from "./HeaderNavi"

const Header = () => (
  <header>
    {/* logo */}
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      {/* Imported from HeaderLogo.js */}
      <HeaderLogo />
    </div>

    <HeaderNavi />
  </header>
)

export default Header
