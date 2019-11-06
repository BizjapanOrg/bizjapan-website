import React from "react"

// A list of pages
const FooterNavi = props => {
  const naviItems = props.list.map(item => {
    if (item === "join") {
      return (
        <li key={item} style={{ width: `33%`, display: `inline-block` }}>
          <a href="https://sites.google.com/bizjapan.org/recruiting-jp/home">
            - JOIN
          </a>
        </li>
      )
    }
    return (
      <li key={item} style={{ width: `33%`, display: `inline-block` }}>
        <Link to={"/" + item}>{"- " + item.toUpperCase()}</Link>
      </li>
    )
  })
  return (
    <ul
      style={{
        listStyle: `none`,
        textAlign: `center`,
        margin: `0`,
      }}
    >
      {naviItems}
    </ul>
  )
}

export default FooterNavi
