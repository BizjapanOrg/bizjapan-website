// import { Link } from "gatsby"
import React from "react"
/** @jsx jsx */
import { jsx } from "theme-ui"

const Header = () => (
  <header
    sx={{
      // this uses the value from `theme.space[4]`
      padding: 4,
      // these use values from `theme.colors`
      color: "black",
      backgroundColor: "red",
      fontFamily: "heading",
    }}
  >
    This is Header
  </header>
)

export default Header
