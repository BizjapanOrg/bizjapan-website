import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"

const Footer = () => (
  <footer>
    <p>©2019 NPO Bizjapan</p>
    <FooterNavi list={naviList} />
    <FooterSocialMedia />
  </footer>
)

var naviList = ["home", "project", "profile", "report", "join", "contact"]
const FooterNavi = props => {
  const naviItems = props.list.map(item => {
    if (item === "join") {
      return (
        <li key={item}>
          <a href="https://sites.google.com/bizjapan.org/recruiting-jp/home">
            - JOIN
          </a>
        </li>
      )
    }
    return (
      <li key={item}>
        <Link to={"/" + item}>{"- " + item.toUpperCase()}</Link>
      </li>
    )
  })
  return <ul>{naviItems}</ul>
}

const FooterSocialMedia = () => (
  <StaticQuery
    query={socialMediaQuery}
    // Render all the images.
    render={data => {
      return (
        <ul
          style={{
            display: `flex`,
            flexDirection: `row`,
            flexWrap: `wrap`,
            justifyContent: `center`,
            textAlign: `center`,
            background: `black`,
            listStyle: `none`,
          }}
        >
          {data.images.edges.map(image => {
            return (
              <li key={image.node.name}>
                <Img
                  fixed={image.node.childImageSharp.fixed}
                  imgStyle={{
                    objectFit: "contain",
                    objectPosition: "50% 50%",
                  }}
                  style={{
                    width: `30vw`,
                    maxWidth: ` 220px`,
                    margin: `0 0.5em 1.45em 0.5em`,
                  }}
                />
              </li>
            )
          })}
        </ul>
      )
    }}
  />
)

// Import all the images in partners folder.
const socialMediaQuery = graphql`
  query {
    images: allFile(filter: { relativeDirectory: { eq: "socialmedia" } }) {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            fixed(height: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`

// const FooterSocialMedia = ({ data }) => (
//   <>
//     <p>Social Media</p>​
//     <a href="https://twitter.com/bizjapanorg">
//       <Img fixed={data.file.childImageSharp.fixed} />
//       <img src="../images/socialmedia/twitter.png" />
//     </a>
//     <a href="https://www.facebook.com/Bizjapan.org/">
//       <img src="../images/socialmedia/facebook.png" />
//     </a>
//     <a href="https://note.mu/bizjapan">
//       <img src="../images/socialmedia/note.png" />
//     </a>
//   </>
// )

export default Footer
